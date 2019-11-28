"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscribedMessage = (function () {
    function UnsubscribedMessage(_requestId) {
        this._requestId = _requestId;
    }
    UnsubscribedMessage.prototype.wampifiedMsg = function () {
        return [UnsubscribedMessage.MSG_UNSUBSCRIBED, this._requestId];
    };
    Object.defineProperty(UnsubscribedMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    UnsubscribedMessage.prototype.msgCode = function () {
        return UnsubscribedMessage.MSG_UNSUBSCRIBED;
    };
    UnsubscribedMessage.MSG_UNSUBSCRIBED = 35;
    return UnsubscribedMessage;
}());
exports.UnsubscribedMessage = UnsubscribedMessage;
//# sourceMappingURL=UnsubscribedMessage.js.map