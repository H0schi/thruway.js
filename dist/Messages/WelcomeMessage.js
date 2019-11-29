"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WelcomeMessage = (function () {
    function WelcomeMessage(_sessionId, _details) {
        this._sessionId = _sessionId;
        this._details = _details;
    }
    WelcomeMessage.prototype.wampifiedMsg = function () {
        return [WelcomeMessage.MSG_WELCOME, this._sessionId, this._details];
    };
    Object.defineProperty(WelcomeMessage.prototype, "sessionId", {
        get: function () {
            return this._sessionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WelcomeMessage.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: true,
        configurable: true
    });
    WelcomeMessage.prototype.msgCode = function () {
        return WelcomeMessage.MSG_WELCOME;
    };
    WelcomeMessage.MSG_WELCOME = 2;
    return WelcomeMessage;
}());
exports.WelcomeMessage = WelcomeMessage;
//# sourceMappingURL=WelcomeMessage.js.map