"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InvocationMessage = (function () {
    function InvocationMessage(_requestId, _registrationId, _details, _args, _argskw) {
        if (_args === void 0) { _args = []; }
        if (_argskw === void 0) { _argskw = {}; }
        this._requestId = _requestId;
        this._registrationId = _registrationId;
        this._details = _details;
        this._args = _args;
        this._argskw = _argskw;
    }
    InvocationMessage.prototype.wampifiedMsg = function () {
        var r = [InvocationMessage.MSG_INVOCATION, this._requestId, this._registrationId, this._details];
        if (Object.keys(this._argskw).length !== 0) {
            r.push(this._args, this._argskw);
            return r;
        }
        if (this._args.length !== 0) {
            r.push(this._args);
        }
        return r;
    };
    Object.defineProperty(InvocationMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvocationMessage.prototype, "registrationId", {
        get: function () {
            return this._registrationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvocationMessage.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvocationMessage.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvocationMessage.prototype, "argskw", {
        get: function () {
            return this._argskw;
        },
        enumerable: true,
        configurable: true
    });
    InvocationMessage.prototype.msgCode = function () {
        return InvocationMessage.MSG_INVOCATION;
    };
    InvocationMessage.MSG_INVOCATION = 68;
    return InvocationMessage;
}());
exports.InvocationMessage = InvocationMessage;
//# sourceMappingURL=InvocationMessage.js.map