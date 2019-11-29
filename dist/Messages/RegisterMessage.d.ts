import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class RegisterMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _options;
    private _procedure;
    static MSG_REGISTER: number;
    constructor(_requestId: number, _options: Object, _procedure: string);
    wampifiedMsg(): Object[];
    readonly requestId: number;
    readonly options: Object;
    readonly procedure: string;
    msgCode(): number;
}
