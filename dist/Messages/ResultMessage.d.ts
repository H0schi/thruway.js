import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class ResultMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _details;
    private _args;
    private _argskw;
    static MSG_RESULT: number;
    constructor(_requestId: number, _details: Object, _args?: Array<any>, _argskw?: Object);
    wampifiedMsg(): Object[];
    readonly requestId: number;
    readonly details: Object | any;
    readonly args: Array<any>;
    readonly argskw: {};
    msgCode(): number;
}
