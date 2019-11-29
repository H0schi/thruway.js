import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class SubscribeMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _options;
    private _topicName;
    static MSG_SUBSCRIBE: number;
    constructor(_requestId: number, _options: Object, _topicName: string);
    wampifiedMsg(): Object[];
    readonly requestId: number;
    readonly options: Object;
    readonly topicName: string;
    msgCode(): number;
}
