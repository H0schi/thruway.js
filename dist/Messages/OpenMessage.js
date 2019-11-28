"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpenMessage = (function () {
    function OpenMessage(_details) {
        this._details = _details;
    }
    OpenMessage.prototype.wampifiedMsg = function () {
        return [OpenMessage.MSG_OPEN, this._details];
    };
    Object.defineProperty(OpenMessage.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: true,
        configurable: true
    });
    OpenMessage.prototype.msgCode = function () {
        return OpenMessage.MSG_OPEN;
    };
    OpenMessage.MSG_OPEN = 901;
    return OpenMessage;
}());
exports.OpenMessage = OpenMessage;
//# sourceMappingURL=OpenMessage.js.map