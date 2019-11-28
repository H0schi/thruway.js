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
var ErrorMessage_1 = require("../Messages/ErrorMessage");
var WampInvocationException = (function (_super) {
    __extends(WampInvocationException, _super);
    function WampInvocationException(invocationMessage, errorUri, args, argskw, details) {
        if (args === void 0) { args = []; }
        if (argskw === void 0) { argskw = {}; }
        if (details === void 0) { details = {}; }
        var _this = _super.call(this, errorUri || 'thruway.error.invocation_exception', args, argskw, details) || this;
        _this.invocationMessage = invocationMessage;
        _this.errorMessage = function () {
            var errorMessage = ErrorMessage_1.ErrorMessage.createErrorMessageFromMessage(_this.invocationMessage, _this.errorUri);
            errorMessage.args = _this.args;
            errorMessage.argskw = _this.argskw;
            errorMessage.details = _this.details;
            return errorMessage;
        };
        return _this;
    }
    WampInvocationException.withInvocationMessageAndWampErrorException = function (invocationMessage, wee) {
        return new WampInvocationException(invocationMessage, wee.errorUri, wee.args, wee.argskw, wee.details);
    };
    return WampInvocationException;
}(WampErrorException_1.WampErrorException));
exports.WampInvocationException = WampInvocationException;
//# sourceMappingURL=WampInvocationException.js.map