import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class UnregisteredMessage implements IMessage, IRequestMessage {
    private _requestId;
    static MSG_UNREGISTERED: number;
    constructor(_requestId: number);
    wampifiedMsg(): number[];
    readonly requestId: number;
    msgCode(): number;
}
