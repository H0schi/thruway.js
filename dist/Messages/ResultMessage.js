"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultMessage = (function () {
    function ResultMessage(_requestId, _details, _args, _argskw) {
        this._requestId = _requestId;
        this._details = _details;
        this._args = _args;
        this._argskw = _argskw;
    }
    ResultMessage.prototype.wampifiedMsg = function () {
        var r = [ResultMessage.MSG_RESULT, this._requestId, this._details];
        if (this._argskw && Object.keys(this._argskw).length !== 0) {
            r.push(this._args, this._argskw);
            return r;
        }
        if (this._args && this._args.length !== 0) {
            r.push(this._args);
        }
        return r;
    };
    Object.defineProperty(ResultMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultMessage.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultMessage.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultMessage.prototype, "argskw", {
        get: function () {
            return this._argskw;
        },
        enumerable: true,
        configurable: true
    });
    ResultMessage.prototype.msgCode = function () {
        return ResultMessage.MSG_RESULT;
    };
    ResultMessage.MSG_RESULT = 50;
    return ResultMessage;
}());
exports.ResultMessage = ResultMessage;
//# sourceMappingURL=ResultMessage.js.map