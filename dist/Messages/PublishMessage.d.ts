import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class PublishMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _options;
    private _topic;
    private _args;
    private _argskw;
    static MSG_PUBLISH: number;
    constructor(_requestId: number, _options: Object, _topic: string, _args?: Array<any>, _argskw?: Object);
    wampifiedMsg(): Object[];
    readonly requestId: number;
    readonly options: Object;
    readonly topic: string;
    readonly args: Array<any>;
    readonly argskw: Object;
    msgCode(): number;
}
