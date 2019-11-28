import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class CallMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _options;
    private _procedure;
    private _args;
    private _argskw;
    static MSG_CALL: number;
    constructor(_requestId: number, _options: Object, _procedure: string, _args?: Array<any>, _argskw?: Object);
    wampifiedMsg(): Object[];
    readonly requestId: number;
    readonly options: Object;
    readonly procedure: string;
    readonly args: Array<any>;
    readonly argskw: Object;
    msgCode(): number;
}
