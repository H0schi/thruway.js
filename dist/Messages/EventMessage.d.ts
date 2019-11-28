import { IMessage } from './Message';
export declare class EventMessage implements IMessage {
    private _subscriptionId;
    private _publicationId;
    private _details;
    private _args;
    private _argskw;
    static MSG_EVENT: number;
    constructor(_subscriptionId: number, _publicationId: number, _details: Object, _args?: Array<any>, _argskw?: Object);
    wampifiedMsg(): Object[];
    readonly subscriptionId: number;
    readonly publicationId: number;
    readonly details: Object;
    readonly args: Array<any>;
    readonly argskw: Object;
    msgCode(): number;
}
