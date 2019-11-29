"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CancelMessage = (function () {
    function CancelMessage(_requestId, _options) {
        this._requestId = _requestId;
        this._options = _options;
    }
    CancelMessage.prototype.wampifiedMsg = function () {
        return [CancelMessage.MSG_CANCEL, this._requestId, this._options];
    };
    Object.defineProperty(CancelMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CancelMessage.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    CancelMessage.prototype.msgCode = function () {
        return CancelMessage.MSG_CANCEL;
    };
    CancelMessage.MSG_CANCEL = 49;
    return CancelMessage;
}());
exports.CancelMessage = CancelMessage;
//# sourceMappingURL=CancelMessage.js.map