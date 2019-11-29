"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbortMessage = (function () {
    function AbortMessage(_details, _reason) {
        if (_details === void 0) { _details = {}; }
        this._details = _details;
        this._reason = _reason;
    }
    AbortMessage.prototype.wampifiedMsg = function () {
        return [AbortMessage.MSG_ABORT, this.details, this.reason];
    };
    Object.defineProperty(AbortMessage.prototype, "reason", {
        get: function () {
            return this._reason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbortMessage.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: true,
        configurable: true
    });
    AbortMessage.prototype.msgCode = function () {
        return AbortMessage.MSG_ABORT;
    };
    AbortMessage.MSG_ABORT = 3;
    return AbortMessage;
}());
exports.AbortMessage = AbortMessage;
//# sourceMappingURL=AbortMessage.js.map