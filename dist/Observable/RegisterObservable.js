"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var WampInvocationException_1 = require("../Common/WampInvocationException");
var UnregisteredMessage_1 = require("../Messages/UnregisteredMessage");
var RegisteredMessage_1 = require("../Messages/RegisteredMessage");
var InvocationMessage_1 = require("../Messages/InvocationMessage");
var UnregisterMessage_1 = require("../Messages/UnregisterMessage");
var WampErrorException_1 = require("../Common/WampErrorException");
var InterruptMessage_1 = require("../Messages/InterruptMessage");
var RegisterMessage_1 = require("../Messages/RegisterMessage");
var ErrorMessage_1 = require("../Messages/ErrorMessage");
var YieldMessage_1 = require("../Messages/YieldMessage");
var Observable_1 = require("rxjs/Observable");
var Subscription_1 = require("rxjs/Subscription");
var Utils_1 = require("../Common/Utils");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/mergeMapTo");
require("rxjs/add/operator/concat");
var RegisterObservable = (function (_super) {
    __extends(RegisterObservable, _super);
    function RegisterObservable(uri, callback, messages, webSocket, options, invocationErrors, scheduler) {
        if (options === void 0) { options = {}; }
        if (scheduler === void 0) { scheduler = null; }
        var _this = _super.call(this) || this;
        _this.uri = uri;
        _this.callback = callback;
        _this.webSocket = webSocket;
        _this.options = options;
        _this.scheduler = scheduler;
        _this.messages = messages.share();
        _this.invocationErrors = invocationErrors || new Subject_1.Subject();
        return _this;
    }
    RegisterObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var self = this;
        var requestId = Utils_1.Utils.uniqueId();
        var disposable = new Subscription_1.Subscription();
        var registerMsg = new RegisterMessage_1.RegisterMessage(requestId, this.options, this.uri);
        var registrationId = null;
        var completed = false;
        var unregisteredMsg = this.messages
            .filter(function (msg) { return msg instanceof UnregisteredMessage_1.UnregisteredMessage && msg.requestId === requestId; })
            .take(1)
            .share();
        var registeredMsg = this.messages
            .filter(function (msg) { return msg instanceof RegisteredMessage_1.RegisteredMessage && msg.requestId === requestId; })
            .do(function (m) {
            registrationId = m.registrationId;
        })
            .take(1)
            .share();
        var invocationMessage = registeredMsg.flatMap(function (m) {
            return _this.messages.filter(function (msg) { return msg instanceof InvocationMessage_1.InvocationMessage && msg.registrationId === m.registrationId; });
        });
        var error = this.messages
            .filter(function (msg) { return msg instanceof ErrorMessage_1.ErrorMessage && msg.errorRequestId === requestId; })
            .flatMap(function (msg) { return Observable_1.Observable.throw(new WampErrorException_1.WampErrorException(msg.errorURI, msg.args), _this.scheduler); })
            .takeUntil(registeredMsg)
            .take(1);
        var unregister = function () {
            if (!registrationId || completed) {
                return;
            }
            var unregisterMsg = new UnregisterMessage_1.UnregisterMessage(Utils_1.Utils.uniqueId(), registrationId);
            self.webSocket.next(unregisterMsg);
        };
        this.webSocket.next(registerMsg);
        var registerSubscription = Observable_1.Observable
            .merge(registeredMsg, unregisteredMsg, error)
            .subscribe(function (v) { return subscriber.next(v); }, function (e) { return subscriber.error(e); }, function () {
            unregister();
            completed = true;
            subscriber.complete();
        });
        var invocationSubscription = invocationMessage
            .flatMap(function (msg) {
            var result = null;
            try {
                if (self.options.extended) {
                    result = self.callback(msg.args, msg.argskw, msg.details, msg);
                }
                else {
                    result = self.callback.apply(null, msg.args);
                }
            }
            catch (e) {
                result = Observable_1.Observable.throw(e);
            }
            var resultObs = (typeof result.subscribe === 'function' || typeof result.then === 'function')
                ? Observable_1.Observable.from(result).defaultIfEmpty(null)
                : Observable_1.Observable.of(result, _this.scheduler);
            var returnObs;
            if (!!_this.options.progress === false) {
                returnObs = resultObs
                    .take(1)
                    .map(function (value) { return new YieldMessage_1.YieldMessage(msg.requestId, {}, [value]); });
            }
            else {
                returnObs = resultObs
                    .map(function (value) { return new YieldMessage_1.YieldMessage(msg.requestId, { progress: true }, [value]); })
                    .concat(Observable_1.Observable.of(new YieldMessage_1.YieldMessage(msg.requestId, {})));
            }
            var interruptMsg = _this.messages
                .filter(function (m) { return m instanceof InterruptMessage_1.InterruptMessage && m.requestId === msg.requestId; })
                .take(1)
                .flatMapTo(Observable_1.Observable.throw(new WampInvocationException_1.WampInvocationException(msg, 'wamp.error.canceled')));
            return returnObs.merge(interruptMsg)
                .takeUntil(unregisteredMsg)
                .catch(function (ex) {
                var invocationError = ex instanceof WampErrorException_1.WampErrorException
                    ? WampInvocationException_1.WampInvocationException.withInvocationMessageAndWampErrorException(msg, ex)
                    : new WampInvocationException_1.WampInvocationException(msg);
                console.log(ex);
                _this.invocationErrors.next(invocationError);
                return Observable_1.Observable.empty(_this.scheduler);
            });
        })
            .subscribe(this.webSocket);
        var invocationErrorsSubscription = this.invocationErrors
            .map(function (e) { return e.errorMessage(); })
            .subscribe(this.webSocket);
        disposable.add(invocationErrorsSubscription);
        disposable.add(invocationSubscription);
        disposable.add(registerSubscription);
        disposable.add(unregister);
        return disposable;
    };
    return RegisterObservable;
}(Observable_1.Observable));
exports.RegisterObservable = RegisterObservable;
//# sourceMappingURL=RegisterObservable.js.map