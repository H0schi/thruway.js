"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WampChallengeException_1 = require("./Common/WampChallengeException");
var WebSocketTransport_1 = require("./Transport/WebSocketTransport");
var RegisterObservable_1 = require("./Observable/RegisterObservable");
var AuthenticateMessage_1 = require("./Messages/AuthenticateMessage");
var TopicObservable_1 = require("./Observable/TopicObservable");
var ChallengeMessage_1 = require("./Messages/ChallengeMessage");
var CallObservable_1 = require("./Observable/CallObservable");
var GoodbyeMessage_1 = require("./Messages/GoodbyeMessage");
var WelcomeMessage_1 = require("./Messages/WelcomeMessage");
var PublishMessage_1 = require("./Messages/PublishMessage");
var HelloMessage_1 = require("./Messages/HelloMessage");
var AbortMessage_1 = require("./Messages/AbortMessage");
var OpenMessage_1 = require("./Messages/OpenMessage");
var Utils_1 = require("./Common/Utils");
var Observable_1 = require("rxjs/Observable");
var Subscription_1 = require("rxjs/Subscription");
var Subject_1 = require("rxjs/Subject");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var async_1 = require("rxjs/scheduler/async");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/take");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/merge");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mapTo");
require("rxjs/add/operator/share");
require("rxjs/add/operator/retryWhen");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/switchMapTo");
require("rxjs/add/operator/takeUntil");
require("rxjs/add/operator/takeWhile");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/publishReplay");
require("rxjs/add/operator/publish");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/finally");
require("rxjs/add/operator/exhaust");
require("rxjs/add/operator/defaultIfEmpty");
require("rxjs/add/operator/multicast");
require("rxjs/add/operator/shareReplay");
require("rxjs/add/operator/combineLatest");
require("rxjs/add/operator/partition");
require("rxjs/add/operator/race");
require("rxjs/add/observable/empty");
require("rxjs/add/observable/from");
require("rxjs/add/observable/timer");
require("rxjs/add/observable/of");
require("rxjs/add/observable/merge");
require("rxjs/add/observable/throw");
var Client = (function () {
    function Client(urlOrTransportOrObs, realm, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.challengeCallback = function () { return Observable_1.Observable.throw(Error('When trying to make a WAMP connection, we received a Challenge Message, but no `onChallenge` callback was set.')); };
        this.challenge = function (challengeMsg) {
            return challengeMsg
                .switchMap(function (msg) {
                var challengeResult = null;
                try {
                    challengeResult = _this.challengeCallback(Observable_1.Observable.of(msg));
                }
                catch (e) {
                    console.error(e);
                    throw new WampChallengeException_1.WampChallengeException(msg);
                }
                return challengeResult.take(1);
            })
                .map(function (signature) { return new AuthenticateMessage_1.AuthenticateMessage(signature); })
                .catch(function (e) {
                if (e instanceof WampChallengeException_1.WampChallengeException) {
                    return Observable_1.Observable.of(e.abortMessage());
                }
                return Observable_1.Observable.throw(e);
            });
        };
        this.subscription = new Subscription_1.Subscription();
        this._onClose = new Subject_1.Subject();
        var close = new Subject_1.Subject();
        var transportData;
        if (typeof urlOrTransportOrObs === 'string') {
            this._transport = new WebSocketTransport_1.WebSocketTransport(urlOrTransportOrObs, ['wamp.2.json'], close);
            transportData = Observable_1.Observable.of({
                transport: this._transport,
                realm: realm,
                options: options
            });
        }
        else if (urlOrTransportOrObs instanceof Subject_1.Subject) {
            this._transport = urlOrTransportOrObs;
            transportData = Observable_1.Observable.of({
                transport: this._transport,
                realm: realm,
                options: options
            });
        }
        else {
            transportData = urlOrTransportOrObs.map(function (config) {
                _this._transport = new WebSocketTransport_1.WebSocketTransport(config.url, ['wamp.2.json'], close, config.autoOpen);
                return { transport: _this._transport, realm: config.realm, options: config.options || {} };
            });
        }
        transportData = transportData
            .do(function (_a) {
            var transport = _a.transport;
            return _this.subscription.add(transport);
        })
            .take(1)
            .shareReplay(1);
        var messages = transportData
            .switchMap(function (_a) {
            var transport = _a.transport, o = _a.options, r = _a.realm;
            return transport
                .map(function (msg) {
                if (msg instanceof AbortMessage_1.AbortMessage) {
                    async_1.async.schedule(function () {
                        throw new Error('Connection ended because ' + JSON.stringify(msg.details));
                    }, 0);
                }
                return msg;
            })
                .do(function (msg) {
                if (msg instanceof OpenMessage_1.OpenMessage) {
                    currentRetryCount = 0;
                    o.roles = o.roles || Client.roles();
                    var helloMsg = new HelloMessage_1.HelloMessage(r, o);
                    transport.next(helloMsg);
                }
            })
                .race(Observable_1.Observable.timer(options.timeout || 5000).switchMapTo(Observable_1.Observable.throw(Error('Transport Timeout'))))
                .retryWhen(o.retryWhen || exports.retryWhen(options.retryOptions));
        })
            .share();
        var remainingMsgs, challengeMsg, goodByeMsg, abortMsg, welcomeMsg;
        _a = messages.partition(function (msg) { return msg instanceof ChallengeMessage_1.ChallengeMessage; }), challengeMsg = _a[0], remainingMsgs = _a[1];
        _b = remainingMsgs.partition(function (msg) { return msg instanceof GoodbyeMessage_1.GoodbyeMessage; }), goodByeMsg = _b[0], remainingMsgs = _b[1];
        _c = remainingMsgs.partition(function (msg) { return msg instanceof AbortMessage_1.AbortMessage; }), abortMsg = _c[0], remainingMsgs = _c[1];
        goodByeMsg = goodByeMsg.do(function (v) { return _this._onClose.next(v); });
        remainingMsgs = remainingMsgs.merge(goodByeMsg);
        abortMsg = abortMsg.do(function (v) { return _this._onClose.next(v); });
        var challenge = this.challenge(challengeMsg)
            .combineLatest(transportData)
            .do(function (_a) {
            var msg = _a[0], td = _a[1];
            return td.transport.next(msg);
        });
        var abortError = abortMsg.map(function (msg) {
            throw new Error(msg.details.message + ' ' + msg.reason);
        });
        _d = remainingMsgs
            .merge(challenge.share())
            .merge(abortError.share())
            .partition(function (msg) { return msg instanceof WelcomeMessage_1.WelcomeMessage; }), welcomeMsg = _d[0], remainingMsgs = _d[1];
        this._session = welcomeMsg
            .combineLatest(transportData)
            .map(function (_a) {
            var msg = _a[0], td = _a[1];
            return ({ messages: remainingMsgs, transport: td.transport, welcomeMsg: msg });
        })
            .multicast(function () { return new ReplaySubject_1.ReplaySubject(1); }).refCount();
        var _a, _b, _c, _d;
    }
    Client.roles = function () {
        return {
            'caller': {
                'features': {
                    'caller_identification': true,
                    'progressive_call_results': true,
                    'call_canceling': true
                }
            },
            'callee': {
                'features': {
                    'caller_identification': true,
                    'pattern_based_registration': true,
                    'shared_registration': true,
                    'progressive_call_results': true,
                    'registration_revocation': true,
                    'call_canceling': true
                }
            },
            'publisher': {
                'features': {
                    'publisher_identification': true,
                    'subscriber_blackwhite_listing': true,
                    'publisher_exclusion': true
                }
            },
            'subscriber': {
                'features': {
                    'publisher_identification': true,
                    'pattern_based_subscription': true,
                    'subscription_revocation': true
                }
            }
        };
    };
    Client.prototype.topic = function (uri, options) {
        return this._session
            .switchMap(function (_a) {
            var transport = _a.transport, messages = _a.messages;
            return new TopicObservable_1.TopicObservable(uri, options, messages, transport);
        })
            .takeUntil(this.onClose);
    };
    Client.prototype.publish = function (uri, value, options) {
        var obs = typeof value.subscribe === 'function' ? value : Observable_1.Observable.of(value);
        var completed = new Subject_1.Subject();
        return this._session
            .takeUntil(completed)
            .map(function (_a) {
            var transport = _a.transport;
            return obs
                .finally(function () { return completed.next(0); })
                .map(function (v) { return new PublishMessage_1.PublishMessage(Utils_1.Utils.uniqueId(), options, uri, [v]); })
                .do(function (m) { return transport.next(m); });
        })
            .exhaust()
            .takeUntil(this.onClose)
            .subscribe();
    };
    Client.prototype.call = function (uri, args, argskw, options) {
        return this._session
            .merge(this.onClose.mapTo(Observable_1.Observable.throw(new Error('Connection Closed'))))
            .take(1)
            .switchMap(function (_a) {
            var transport = _a.transport, messages = _a.messages;
            return new CallObservable_1.CallObservable(uri, messages, transport, args, argskw, options);
        });
    };
    Client.prototype.register = function (uri, callback, options) {
        return this._session
            .merge(this.onClose.mapTo(Observable_1.Observable.throw(new Error('Connection Closed'))))
            .switchMap(function (_a) {
            var transport = _a.transport, messages = _a.messages;
            return new RegisterObservable_1.RegisterObservable(uri, callback, messages, transport, options);
        });
    };
    Client.prototype.progressiveCall = function (uri, args, argskw, options) {
        if (options === void 0) { options = {}; }
        options.receive_progress = true;
        var completed = new Subject_1.Subject();
        var retry = false;
        return this._session
            .merge(this.onClose.mapTo(Observable_1.Observable.throw(new Error('Connection Closed'))))
            .takeUntil(completed)
            .switchMap(function (_a) {
            var transport = _a.transport, messages = _a.messages;
            var callObs = new CallObservable_1.CallObservable(uri, messages, transport, args, argskw, options);
            return callObs.finally(function () { return completed.next(0); });
        })
            .do(function () { return retry = false; })
            .retryWhen(function (errors) {
            return errors
                .flatMap(function (e) {
                if (e.errorUri === 'wamp.error.canceled' || retry) {
                    retry = true;
                    return Observable_1.Observable.of(e);
                }
                return Observable_1.Observable.throw(e);
            })
                .delay(5000);
        });
    };
    Client.prototype.progressiveRegister = function (uri, callback, options) {
        if (options === void 0) { options = {}; }
        options.progress = true;
        options.replace_orphaned_sessions = 'yes';
        return this.register(uri, callback, options);
    };
    Client.prototype.onChallenge = function (challengeCallback) {
        this.challengeCallback = challengeCallback;
    };
    Client.prototype.close = function () {
        this._onClose.next();
    };
    Client.prototype.open = function () {
        this._transport.open();
    };
    Object.defineProperty(Client.prototype, "onOpen", {
        get: function () {
            return this._session;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "onClose", {
        get: function () {
            return this._onClose;
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());
exports.Client = Client;
var currentRetryCount = 0;
var retryDefaults = {
    maxRetryDelay: 60000,
    initialRetryDelay: 1500,
    retryDelayGrowth: 1.5,
    maxRetries: 10000
};
exports.retryWhen = function (retryOptions) {
    return function (attempts) {
        var o = __assign({}, retryDefaults, retryOptions);
        var maxRetryDelay = o.maxRetryDelay, initialRetryDelay = o.initialRetryDelay, retryDelayGrowth = o.retryDelayGrowth, maxRetries = o.maxRetries;
        return attempts
            .flatMap(function (ex) {
            console.error(ex.message);
            console.log('Reconnecting');
            var delay = Math.min(maxRetryDelay, Math.pow(retryDelayGrowth, ++currentRetryCount) + initialRetryDelay);
            return Observable_1.Observable.timer(Math.floor(delay));
        })
            .take(maxRetries);
    };
};
//# sourceMappingURL=Client.js.map