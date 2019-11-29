import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class CancelMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _options;
    static MSG_CANCEL: number;
    constructor(_requestId: number, _options: Object);
    wampifiedMsg(): Object[];
    readonly requestId: number;
    readonly options: Object;
    msgCode(): number;
}
