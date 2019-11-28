"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var YieldMessage = (function () {
    function YieldMessage(_requestId, _options, _args, _argskw) {
        this._requestId = _requestId;
        this._options = _options;
        this._args = _args;
        this._argskw = _argskw;
    }
    YieldMessage.prototype.wampifiedMsg = function () {
        var r = [YieldMessage.MSG_YIELD, this._requestId, this._options];
        if (this._argskw && Object.keys(this._argskw).length !== 0) {
            r.push(this._args, this._argskw);
            return r;
        }
        if (this._args && this._args.length !== 0) {
            r.push(this._args);
        }
        return r;
    };
    Object.defineProperty(YieldMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YieldMessage.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YieldMessage.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YieldMessage.prototype, "argskw", {
        get: function () {
            return this._argskw;
        },
        enumerable: true,
        configurable: true
    });
    YieldMessage.prototype.msgCode = function () {
        return YieldMessage.MSG_YIELD;
    };
    YieldMessage.MSG_YIELD = 70;
    return YieldMessage;
}());
exports.YieldMessage = YieldMessage;
//# sourceMappingURL=YieldMessage.js.map