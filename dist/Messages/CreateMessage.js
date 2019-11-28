"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbortMessage_1 = require("./AbortMessage");
var GoodbyeMessage_1 = require("./GoodbyeMessage");
var UnregisteredMessage_1 = require("./UnregisteredMessage");
var WelcomeMessage_1 = require("./WelcomeMessage");
var SubscribedMessage_1 = require("./SubscribedMessage");
var UnsubscribedMessage_1 = require("./UnsubscribedMessage");
var EventMessage_1 = require("./EventMessage");
var RegisteredMessage_1 = require("./RegisteredMessage");
var InvocationMessage_1 = require("./InvocationMessage");
var ResultMessage_1 = require("./ResultMessage");
var ChallengeMessage_1 = require("./ChallengeMessage");
var ErrorMessage_1 = require("./ErrorMessage");
var InterruptMessage_1 = require("./InterruptMessage");
var CreateMessage = (function () {
    function CreateMessage() {
    }
    CreateMessage.fromArray = function (data) {
        switch (data[0]) {
            case AbortMessage_1.AbortMessage.MSG_ABORT:
                return new AbortMessage_1.AbortMessage(data[1], data[2]);
            case GoodbyeMessage_1.GoodbyeMessage.MSG_GOODBYE:
                return new GoodbyeMessage_1.GoodbyeMessage(data[1], data[2]);
            case UnregisteredMessage_1.UnregisteredMessage.MSG_UNREGISTERED:
                return new UnregisteredMessage_1.UnregisteredMessage(data[1]);
            case WelcomeMessage_1.WelcomeMessage.MSG_WELCOME:
                return new WelcomeMessage_1.WelcomeMessage(data[1], data[2]);
            case SubscribedMessage_1.SubscribedMessage.MSG_SUBSCRIBED:
                return new SubscribedMessage_1.SubscribedMessage(data[1], data[2]);
            case UnsubscribedMessage_1.UnsubscribedMessage.MSG_UNSUBSCRIBED:
                return new UnsubscribedMessage_1.UnsubscribedMessage(data[1]);
            case EventMessage_1.EventMessage.MSG_EVENT:
                return new EventMessage_1.EventMessage(data[1], data[2], data[3], data[4] || [], data[5] || {});
            case RegisteredMessage_1.RegisteredMessage.MSG_REGISTERED:
                return new RegisteredMessage_1.RegisteredMessage(data[1], data[2]);
            case InvocationMessage_1.InvocationMessage.MSG_INVOCATION:
                return new InvocationMessage_1.InvocationMessage(data[1], data[2], data[3], data[4] || [], data[5] || {});
            case ResultMessage_1.ResultMessage.MSG_RESULT:
                return new ResultMessage_1.ResultMessage(data[1], data[2], data[3], data[4]);
            case ChallengeMessage_1.ChallengeMessage.MSG_CHALLENGE:
                return new ChallengeMessage_1.ChallengeMessage(data[1], data[2]);
            case ErrorMessage_1.ErrorMessage.MSG_ERROR:
                return new ErrorMessage_1.ErrorMessage(data[1], data[2], data[3], data[4], data[5] || [], data[6] || {});
            case InterruptMessage_1.InterruptMessage.MSG_INTERRUPT:
                return new InterruptMessage_1.InterruptMessage(data[1], data[2]);
        }
    };
    return CreateMessage;
}());
exports.CreateMessage = CreateMessage;
//# sourceMappingURL=CreateMessage.js.map