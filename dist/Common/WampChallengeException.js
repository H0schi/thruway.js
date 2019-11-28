"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var WampErrorException_1 = require("./WampErrorException");
var AbortMessage_1 = require("../Messages/AbortMessage");
var WampChallengeException = (function (_super) {
    __extends(WampChallengeException, _super);
    function WampChallengeException(challengeMessage, errorUri) {
        var _this = _super.call(this, errorUri || 'thruway.error.challenge_exception') || this;
        _this.challengeMessage = challengeMessage;
        return _this;
    }
    WampChallengeException.prototype.abortMessage = function () {
        return new AbortMessage_1.AbortMessage({}, this.errorUri);
    };
    return WampChallengeException;
}(WampErrorException_1.WampErrorException));
exports.WampChallengeException = WampChallengeException;
//# sourceMappingURL=WampChallengeException.js.map