"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CallMessage = (function () {
    function CallMessage(_requestId, _options, _procedure, _args, _argskw) {
        if (_args === void 0) { _args = []; }
        if (_argskw === void 0) { _argskw = {}; }
        this._requestId = _requestId;
        this._options = _options;
        this._procedure = _procedure;
        this._args = _args;
        this._argskw = _argskw;
    }
    CallMessage.prototype.wampifiedMsg = function () {
        var r = [CallMessage.MSG_CALL, this.requestId, this.options, this.procedure];
        if (Object.keys(this._argskw).length !== 0) {
            r.push(this._args, this._argskw);
            return r;
        }
        if (this._args.length !== 0) {
            r.push(this._args);
        }
        return r;
    };
    Object.defineProperty(CallMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CallMessage.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CallMessage.prototype, "procedure", {
        get: function () {
            return this._procedure;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CallMessage.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CallMessage.prototype, "argskw", {
        get: function () {
            return this._argskw;
        },
        enumerable: true,
        configurable: true
    });
    CallMessage.prototype.msgCode = function () {
        return CallMessage.MSG_CALL;
    };
    CallMessage.MSG_CALL = 48;
    return CallMessage;
}());
exports.CallMessage = CallMessage;
//# sourceMappingURL=CallMessage.js.map