"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthenticateMessage = (function () {
    function AuthenticateMessage(_signature, _extra) {
        this._signature = _signature;
        this._extra = _extra;
    }
    AuthenticateMessage.prototype.wampifiedMsg = function () {
        return [AuthenticateMessage.MSG_AUTHENTICATE, this.signature, this.extra || {}];
    };
    Object.defineProperty(AuthenticateMessage.prototype, "signature", {
        get: function () {
            return this._signature;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticateMessage.prototype, "extra", {
        get: function () {
            return this._extra;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticateMessage.prototype.msgCode = function () {
        return AuthenticateMessage.MSG_AUTHENTICATE;
    };
    AuthenticateMessage.MSG_AUTHENTICATE = 5;
    return AuthenticateMessage;
}());
exports.AuthenticateMessage = AuthenticateMessage;
//# sourceMappingURL=AuthenticateMessage.js.map