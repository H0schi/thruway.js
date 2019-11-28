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
var Observable_1 = require("rxjs/Observable");
var Subscription_1 = require("rxjs/Subscription");
var WampErrorException_1 = require("../Common/WampErrorException");
var ResultMessage_1 = require("../Messages/ResultMessage");
var CancelMessage_1 = require("../Messages/CancelMessage");
var ErrorMessage_1 = require("../Messages/ErrorMessage");
var CallMessage_1 = require("../Messages/CallMessage");
var Utils_1 = require("../Common/Utils");
var CallObservable = (function (_super) {
    __extends(CallObservable, _super);
    function CallObservable(uri, messages, webSocket, args, argskw, options, scheduler) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.uri = uri;
        _this.webSocket = webSocket;
        _this.args = args;
        _this.argskw = argskw;
        _this.options = options;
        _this.scheduler = scheduler;
        _this.completed = false;
        _this.messages = messages.share();
        return _this;
    }
    CallObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var requestId = Utils_1.Utils.uniqueId();
        var callMsg = new CallMessage_1.CallMessage(requestId, this.options, this.uri, this.args, this.argskw);
        var msg = this.messages
            .do(null, function () { return _this.completed = true; })
            .filter(function (m) { return m instanceof ResultMessage_1.ResultMessage && m.requestId === requestId; })
            .filter(function (m) { return (!!m.args || !!m.argskw) || !m.details.progress; })
            .flatMap(function (m, index) {
            if (!!m.details.progress === false && (index === 0 || (m.args || m.argskw))) {
                var details = m.details;
                details.progress = true;
                return Observable_1.Observable.from([
                    new ResultMessage_1.ResultMessage(m.requestId, details, m.args, m.argskw),
                    new ResultMessage_1.ResultMessage(m.requestId, { progress: false })
                ], _this.scheduler);
            }
            return Observable_1.Observable.of(m);
        })
            .publish().refCount();
        var resultMsg = msg
            .takeWhile(function (m) { return m.details.progress || false; })
            .finally(function () { return _this.completed = true; })
            .share();
        var error = this.messages
            .filter(function (m) { return m instanceof ErrorMessage_1.ErrorMessage && m.errorRequestId === requestId; })
            .map(function (errMsg) {
            errMsg.args.push({ uri: _this.uri });
            return errMsg;
        })
            .do(function () { return _this.completed = true; })
            .takeUntil(msg.filter(function (m) { return !m.details.progress; }))
            .flatMap(function (m) { return Observable_1.Observable.throw(new WampErrorException_1.WampErrorException(m.errorURI, m.args), _this.scheduler); })
            .take(1);
        try {
            this.webSocket.next(callMsg);
        }
        catch (e) {
            subscriber.error(e);
            return;
        }
        var result = error
            .merge(resultMsg)
            .map(function (m) {
            var details = m.details;
            delete details.progress;
            return new ResultMessage_1.ResultMessage(m.requestId, details, m.args, m.argskw);
        });
        var disposable = new Subscription_1.Subscription(function () {
            if (!_this.completed) {
                var cancelMsg = new CancelMessage_1.CancelMessage(requestId, {});
                _this.webSocket.next(cancelMsg);
            }
        });
        disposable.add(result.subscribe(function (v) { return subscriber.next(v); }, function (e) { return subscriber.error(e); }, function () { return subscriber.complete(); }));
        return disposable;
    };
    return CallObservable;
}(Observable_1.Observable));
exports.CallObservable = CallObservable;
//# sourceMappingURL=CallObservable.js.map