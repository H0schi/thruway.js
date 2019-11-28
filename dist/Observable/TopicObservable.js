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
var UnsubscribedMessage_1 = require("../Messages/UnsubscribedMessage");
var UnsubscribeMessage_1 = require("../Messages/UnsubscribeMessage");
var SubscribedMessage_1 = require("../Messages/SubscribedMessage");
var WampErrorException_1 = require("../Common/WampErrorException");
var SubscribeMessage_1 = require("../Messages/SubscribeMessage");
var ErrorMessage_1 = require("../Messages/ErrorMessage");
var EventMessage_1 = require("../Messages/EventMessage");
var Subscription_1 = require("rxjs/Subscription");
var Observable_1 = require("rxjs/Observable");
var Utils_1 = require("../Common/Utils");
var TopicObservable = (function (_super) {
    __extends(TopicObservable, _super);
    function TopicObservable(uri, options, messages, websocket) {
        var _this = _super.call(this) || this;
        _this.uri = uri;
        _this.options = options;
        _this.messages = messages;
        _this.websocket = websocket;
        return _this;
    }
    TopicObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var requestId = Utils_1.Utils.uniqueId();
        var subscriptionId = null;
        var subscribeMsg = new SubscribeMessage_1.SubscribeMessage(requestId, this.options, this.uri);
        var subscribedMsg = this.messages
            .filter(function (msg) { return msg instanceof SubscribedMessage_1.SubscribedMessage && msg.requestId === requestId; })
            .take(1);
        var errorMsg = this.messages
            .filter(function (msg) { return msg instanceof ErrorMessage_1.ErrorMessage && msg.errorRequestId === requestId; })
            .flatMap(function (msg) { return Observable_1.Observable.throw(new WampErrorException_1.WampErrorException(msg.errorURI, msg.args)); })
            .take(1);
        var unsubscribedMsg = this.messages
            .filter(function (msg) { return msg instanceof UnsubscribedMessage_1.UnsubscribedMessage && msg.requestId === requestId; })
            .take(1);
        this.websocket.next(subscribeMsg);
        var sub = subscribedMsg
            .do(function (m) { return subscriptionId = m.subscriptionId; })
            .flatMap(function (m) {
            var sid = m.subscriptionId;
            return _this.messages
                .filter(function (msg) { return msg instanceof EventMessage_1.EventMessage && msg.subscriptionId === sid; });
        })
            .merge(errorMsg)
            .takeUntil(unsubscribedMsg)
            .subscribe(subscriber);
        var disposable = new Subscription_1.Subscription();
        disposable.add(sub);
        disposable.add(function () {
            if (!subscriptionId) {
                return;
            }
            var unsubscribeMsg = new UnsubscribeMessage_1.UnsubscribeMessage(Utils_1.Utils.uniqueId(), subscriptionId);
            _this.websocket.next(unsubscribeMsg);
        });
        return disposable;
    };
    return TopicObservable;
}(Observable_1.Observable));
exports.TopicObservable = TopicObservable;
//# sourceMappingURL=TopicObservable.js.map