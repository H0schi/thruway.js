"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventMessage = (function () {
    function EventMessage(_subscriptionId, _publicationId, _details, _args, _argskw) {
        if (_args === void 0) { _args = []; }
        if (_argskw === void 0) { _argskw = {}; }
        this._subscriptionId = _subscriptionId;
        this._publicationId = _publicationId;
        this._details = _details;
        this._args = _args;
        this._argskw = _argskw;
    }
    EventMessage.prototype.wampifiedMsg = function () {
        var r = [EventMessage.MSG_EVENT, this._subscriptionId, this._publicationId, this._details];
        if (Object.keys(this._argskw).length !== 0) {
            r.push(this._args, this._argskw);
            return r;
        }
        if (this._args.length !== 0) {
            r.push(this._args);
        }
        return r;
    };
    Object.defineProperty(EventMessage.prototype, "subscriptionId", {
        get: function () {
            return this._subscriptionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMessage.prototype, "publicationId", {
        get: function () {
            return this._publicationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMessage.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMessage.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMessage.prototype, "argskw", {
        get: function () {
            return this._argskw;
        },
        enumerable: true,
        configurable: true
    });
    EventMessage.prototype.msgCode = function () {
        return EventMessage.MSG_EVENT;
    };
    EventMessage.MSG_EVENT = 36;
    return EventMessage;
}());
exports.EventMessage = EventMessage;
//# sourceMappingURL=EventMessage.js.map