import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class SubscribedMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _subscriptionId;
    static MSG_SUBSCRIBED: number;
    constructor(_requestId: number, _subscriptionId: number);
    wampifiedMsg(): number[];
    readonly requestId: number;
    readonly subscriptionId: number;
    msgCode(): number;
}
