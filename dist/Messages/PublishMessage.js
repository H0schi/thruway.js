"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PublishMessage = (function () {
    function PublishMessage(_requestId, _options, _topic, _args, _argskw) {
        if (_args === void 0) { _args = []; }
        if (_argskw === void 0) { _argskw = {}; }
        this._requestId = _requestId;
        this._options = _options;
        this._topic = _topic;
        this._args = _args;
        this._argskw = _argskw;
    }
    PublishMessage.prototype.wampifiedMsg = function () {
        var r = [PublishMessage.MSG_PUBLISH, this.requestId, this.options || {}, this.topic];
        if (Object.keys(this._argskw).length !== 0) {
            r.push(this._args, this._argskw);
            return r;
        }
        if (this._args.length !== 0) {
            r.push(this._args);
        }
        return r;
    };
    Object.defineProperty(PublishMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublishMessage.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublishMessage.prototype, "topic", {
        get: function () {
            return this._topic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublishMessage.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublishMessage.prototype, "argskw", {
        get: function () {
            return this._argskw;
        },
        enumerable: true,
        configurable: true
    });
    PublishMessage.prototype.msgCode = function () {
        return PublishMessage.MSG_PUBLISH;
    };
    PublishMessage.MSG_PUBLISH = 16;
    return PublishMessage;
}());
exports.PublishMessage = PublishMessage;
//# sourceMappingURL=PublishMessage.js.map