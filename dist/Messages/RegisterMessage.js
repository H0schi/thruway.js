"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterMessage = (function () {
    function RegisterMessage(_requestId, _options, _procedure) {
        this._requestId = _requestId;
        this._options = _options;
        this._procedure = _procedure;
    }
    RegisterMessage.prototype.wampifiedMsg = function () {
        return [RegisterMessage.MSG_REGISTER, this._requestId, this._options, this._procedure];
    };
    Object.defineProperty(RegisterMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterMessage.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterMessage.prototype, "procedure", {
        get: function () {
            return this._procedure;
        },
        enumerable: true,
        configurable: true
    });
    RegisterMessage.prototype.msgCode = function () {
        return RegisterMessage.MSG_REGISTER;
    };
    RegisterMessage.MSG_REGISTER = 64;
    return RegisterMessage;
}());
exports.RegisterMessage = RegisterMessage;
//# sourceMappingURL=RegisterMessage.js.map