import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class UnsubscribedMessage implements IMessage, IRequestMessage {
    private _requestId;
    static MSG_UNSUBSCRIBED: number;
    constructor(_requestId: number);
    wampifiedMsg(): number[];
    readonly requestId: number;
    msgCode(): number;
}
