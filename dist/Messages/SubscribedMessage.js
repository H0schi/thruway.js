"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubscribedMessage = (function () {
    function SubscribedMessage(_requestId, _subscriptionId) {
        this._requestId = _requestId;
        this._subscriptionId = _subscriptionId;
    }
    SubscribedMessage.prototype.wampifiedMsg = function () {
        return [SubscribedMessage.MSG_SUBSCRIBED, this._requestId, this._subscriptionId];
    };
    Object.defineProperty(SubscribedMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscribedMessage.prototype, "subscriptionId", {
        get: function () {
            return this._subscriptionId;
        },
        enumerable: true,
        configurable: true
    });
    SubscribedMessage.prototype.msgCode = function () {
        return SubscribedMessage.MSG_SUBSCRIBED;
    };
    SubscribedMessage.MSG_SUBSCRIBED = 33;
    return SubscribedMessage;
}());
exports.SubscribedMessage = SubscribedMessage;
//# sourceMappingURL=SubscribedMessage.js.map