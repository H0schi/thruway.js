"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PublisedMessage = (function () {
    function PublisedMessage() {
    }
    PublisedMessage.prototype.wampifiedMsg = function () {
        return undefined;
    };
    PublisedMessage.prototype.msgCode = function () {
        return PublisedMessage.MSG_PUBLISHED;
    };
    PublisedMessage.MSG_PUBLISHED = 17;
    return PublisedMessage;
}());
exports.PublisedMessage = PublisedMessage;
//# sourceMappingURL=PublishedMessage.js.map