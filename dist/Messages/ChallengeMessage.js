"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChallengeMessage = (function () {
    function ChallengeMessage(_authMethod, _extra) {
        this._authMethod = _authMethod;
        this._extra = _extra;
    }
    ChallengeMessage.prototype.wampifiedMsg = function () {
        return [ChallengeMessage.MSG_CHALLENGE, this.authMethod, this.extra];
    };
    Object.defineProperty(ChallengeMessage.prototype, "authMethod", {
        get: function () {
            return this._authMethod;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChallengeMessage.prototype, "extra", {
        get: function () {
            return this._extra;
        },
        enumerable: true,
        configurable: true
    });
    ChallengeMessage.prototype.msgCode = function () {
        return ChallengeMessage.MSG_CHALLENGE;
    };
    ChallengeMessage.MSG_CHALLENGE = 4;
    return ChallengeMessage;
}());
exports.ChallengeMessage = ChallengeMessage;
//# sourceMappingURL=ChallengeMessage.js.map