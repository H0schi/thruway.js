import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class YieldMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _options;
    private _args;
    private _argskw;
    static MSG_YIELD: number;
    constructor(_requestId: number, _options: Object, _args?: Array<any>, _argskw?: Object);
    wampifiedMsg(): any[];
    readonly requestId: number;
    readonly options: Object;
    readonly args: Array<any>;
    readonly argskw: Object;
    msgCode(): number;
}
