"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscribeMessage = (function () {
    function UnsubscribeMessage(_requestId, _subscriptionId) {
        this._requestId = _requestId;
        this._subscriptionId = _subscriptionId;
    }
    UnsubscribeMessage.prototype.wampifiedMsg = function () {
        return [UnsubscribeMessage.MSG_UNSUBSCRIBE, this._requestId, this._subscriptionId];
    };
    Object.defineProperty(UnsubscribeMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnsubscribeMessage.prototype, "subscriptionId", {
        get: function () {
            return this._subscriptionId;
        },
        enumerable: true,
        configurable: true
    });
    UnsubscribeMessage.prototype.msgCode = function () {
        return UnsubscribeMessage.MSG_UNSUBSCRIBE;
    };
    UnsubscribeMessage.MSG_UNSUBSCRIBE = 34;
    return UnsubscribeMessage;
}());
exports.UnsubscribeMessage = UnsubscribeMessage;
//# sourceMappingURL=UnsubscribeMessage.js.map