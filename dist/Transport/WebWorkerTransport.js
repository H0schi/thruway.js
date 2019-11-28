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
var Subscription_1 = require("rxjs/Subscription");
var Subject_1 = require("rxjs/Subject");
var CreateMessage_1 = require("../Messages/CreateMessage");
var WebWorkerTransport = (function (_super) {
    __extends(WebWorkerTransport, _super);
    function WebWorkerTransport(workerName, url, protocols, open, close) {
        if (workerName === void 0) { workerName = 'worker.js'; }
        if (url === void 0) { url = 'ws://127.0.0.1:9090/'; }
        if (protocols === void 0) { protocols = ['wamp.2.json']; }
        if (open === void 0) { open = new Subject_1.Subject(); }
        if (close === void 0) { close = new Subject_1.Subject(); }
        var _this = _super.call(this) || this;
        _this.workerName = workerName;
        _this.url = url;
        _this.protocols = protocols;
        _this.open = open;
        _this.close = close;
        _this.output = new Subject_1.Subject();
        return _this;
    }
    WebWorkerTransport.prototype._subscribe = function (subscriber) {
        var _this = this;
        var ww;
        if (!this.worker) {
            ww = new Worker(this.workerName);
        }
        this.output = new Subject_1.Subject();
        var messages = new Subject_1.Subject();
        ww.postMessage({ type: 'open', url: this.url, protocols: this.protocols });
        ww.onmessage = function (e) {
            messages.next(e);
        };
        var open = messages
            .filter(function (e) { return e.data.type === 'open'; })
            .subscribe(function (e) {
            console.log('socket opened');
            _this.worker = ww;
            _this.open.next(e);
        });
        var close = messages
            .filter(function (e) { return e.data.type === 'close'; })
            .subscribe(function (e) {
            _this.worker = null;
            _this.close.next(e);
            _this.output.error(e);
        });
        var message = messages
            .filter(function (e) { return e.data.type === 'message'; })
            .subscribe(function (e) {
            console.log(e.data.payload);
            var d = e.data.payload;
            _this.output.next(CreateMessage_1.CreateMessage.fromArray(d));
        });
        var error = messages
            .filter(function (e) { return e.data.type === 'error'; })
            .subscribe(function (e) {
            _this.worker = null;
            _this.output.error(e);
        });
        var subscription = new Subscription_1.Subscription();
        subscription.add(this.output.subscribe(subscriber));
        subscription.add(error);
        subscription.add(message);
        subscription.add(close);
        subscription.add(open);
        subscription.add(function () {
            if (_this.worker) {
                console.log('closing socket');
                _this.worker.postMessage({ type: 'close' });
                _this.worker = null;
            }
        });
        return subscription;
    };
    WebWorkerTransport.prototype.next = function (msg) {
        if (!this.worker) {
            return;
        }
        this.worker.postMessage({ type: 'send', payload: msg.wampifiedMsg() });
    };
    WebWorkerTransport.prototype.unsubscribe = function () {
        _super.prototype.unsubscribe.call(this);
        if (this.worker) {
            this.worker.postMessage({ type: 'close' });
        }
    };
    return WebWorkerTransport;
}(Subject_1.Subject));
exports.WebWorkerTransport = WebWorkerTransport;
//# sourceMappingURL=WebWorkerTransport.js.map