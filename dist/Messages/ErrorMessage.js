"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessage = (function () {
    function ErrorMessage(_errorMsgCode, _errorRequestId, _details, _errorURI, _args, _argskw) {
        if (_args === void 0) { _args = []; }
        if (_argskw === void 0) { _argskw = {}; }
        this._errorMsgCode = _errorMsgCode;
        this._errorRequestId = _errorRequestId;
        this._details = _details;
        this._errorURI = _errorURI;
        this._args = _args;
        this._argskw = _argskw;
    }
    ErrorMessage.createErrorMessageFromMessage = function (msg, errorUri) {
        if (errorUri === null) {
            errorUri = 'wamp.error.unknown';
        }
        return new ErrorMessage(msg.msgCode(), msg.requestId, {}, errorUri);
    };
    ErrorMessage.prototype.wampifiedMsg = function () {
        var r = [ErrorMessage.MSG_ERROR, this._errorMsgCode, this._errorRequestId, this._details, this._errorURI];
        if (Object.keys(this._argskw).length !== 0) {
            r.push(this._args, this._argskw);
            return r;
        }
        if (this._args.length !== 0) {
            r.push(this._args);
        }
        return r;
    };
    Object.defineProperty(ErrorMessage.prototype, "errorMsgCode", {
        get: function () {
            return this._errorMsgCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage.prototype, "errorRequestId", {
        get: function () {
            return this._errorRequestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage.prototype, "details", {
        get: function () {
            return this._details;
        },
        set: function (value) {
            this._details = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage.prototype, "errorURI", {
        get: function () {
            return this._errorURI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage.prototype, "args", {
        get: function () {
            return this._args;
        },
        set: function (value) {
            this._args = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage.prototype, "argskw", {
        get: function () {
            return this._argskw;
        },
        set: function (value) {
            this._argskw = value;
        },
        enumerable: true,
        configurable: true
    });
    ErrorMessage.prototype.msgCode = function () {
        return ErrorMessage.MSG_ERROR;
    };
    ErrorMessage.MSG_ERROR = 8;
    return ErrorMessage;
}());
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map