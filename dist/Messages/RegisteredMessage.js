"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegisteredMessage = (function () {
    function RegisteredMessage(_requestId, _registrationId) {
        this._requestId = _requestId;
        this._registrationId = _registrationId;
    }
    RegisteredMessage.prototype.wampifiedMsg = function () {
        return [RegisteredMessage.MSG_REGISTERED, this._requestId, this._registrationId];
    };
    Object.defineProperty(RegisteredMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisteredMessage.prototype, "registrationId", {
        get: function () {
            return this._registrationId;
        },
        enumerable: true,
        configurable: true
    });
    RegisteredMessage.prototype.msgCode = function () {
        return RegisteredMessage.MSG_REGISTERED;
    };
    RegisteredMessage.MSG_REGISTERED = 65;
    return RegisteredMessage;
}());
exports.RegisteredMessage = RegisteredMessage;
//# sourceMappingURL=RegisteredMessage.js.map