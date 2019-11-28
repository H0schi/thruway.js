"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GoodbyeMessage = (function () {
    function GoodbyeMessage(_details, _uri) {
        this._details = _details;
        this._uri = _uri;
    }
    GoodbyeMessage.prototype.wampifiedMsg = function () {
        return [GoodbyeMessage.MSG_GOODBYE, this.details, this.uri];
    };
    Object.defineProperty(GoodbyeMessage.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoodbyeMessage.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: true,
        configurable: true
    });
    GoodbyeMessage.prototype.msgCode = function () {
        return GoodbyeMessage.MSG_GOODBYE;
    };
    GoodbyeMessage.MSG_GOODBYE = 6;
    return GoodbyeMessage;
}());
exports.GoodbyeMessage = GoodbyeMessage;
//# sourceMappingURL=GoodbyeMessage.js.map