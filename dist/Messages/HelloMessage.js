"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloMessage = (function () {
    function HelloMessage(realm, details) {
        this.realm = realm;
        this.details = details;
    }
    HelloMessage.prototype.wampifiedMsg = function () {
        return [HelloMessage.MSG_HELLO, this.realm, this.details];
    };
    HelloMessage.prototype.msgCode = function () {
        return HelloMessage.MSG_HELLO;
    };
    HelloMessage.MSG_HELLO = 1;
    return HelloMessage;
}());
exports.HelloMessage = HelloMessage;
//# sourceMappingURL=HelloMessage.js.map