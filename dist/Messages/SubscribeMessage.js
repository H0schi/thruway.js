"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubscribeMessage = (function () {
    function SubscribeMessage(_requestId, _options, _topicName) {
        this._requestId = _requestId;
        this._options = _options;
        this._topicName = _topicName;
    }
    SubscribeMessage.prototype.wampifiedMsg = function () {
        return [SubscribeMessage.MSG_SUBSCRIBE, this._requestId, this._options || {}, this._topicName];
    };
    Object.defineProperty(SubscribeMessage.prototype, "requestId", {
        get: function () {
            return this._requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscribeMessage.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscribeMessage.prototype, "topicName", {
        get: function () {
            return this._topicName;
        },
        enumerable: true,
        configurable: true
    });
    SubscribeMessage.prototype.msgCode = function () {
        return SubscribeMessage.MSG_SUBSCRIBE;
    };
    SubscribeMessage.MSG_SUBSCRIBE = 32;
    return SubscribeMessage;
}());
exports.SubscribeMessage = SubscribeMessage;
//# sourceMappingURL=SubscribeMessage.js.map