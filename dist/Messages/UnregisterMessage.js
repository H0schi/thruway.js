"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnregisterMessage = (function () {
    function UnregisterMessage(_requestId, _registrationId) {
        this._requestId = _requestId;
        this._registrationId = _registrationId;
    }
    UnregisterMessage.prototype.wampifiedMsg = function () {
        return [UnregisterMessage.MSG_UNREGISTER, this._requestId, this._registrationId];
    };
    Object.defineProperty(UnregisterMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnregisterMessage.prototype, "registrationId", {
        get: function () {
            return this._registrationId;
        },
        enumerable: true,
        configurable: true
    });
    UnregisterMessage.prototype.msgCode = function () {
        return UnregisterMessage.MSG_UNREGISTER;
    };
    UnregisterMessage.MSG_UNREGISTER = 66;
    return UnregisterMessage;
}());
exports.UnregisterMessage = UnregisterMessage;
//# sourceMappingURL=UnregisterMessage.js.map