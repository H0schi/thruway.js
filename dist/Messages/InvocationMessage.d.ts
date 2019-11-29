import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class InvocationMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _registrationId;
    private _details;
    private _args;
    private _argskw;
    static MSG_INVOCATION: number;
    constructor(_requestId: number, _registrationId: number, _details: Object, _args?: Array<any>, _argskw?: Object);
    wampifiedMsg(): Object[];
    readonly requestId: number;
    readonly registrationId: number;
    readonly details: Object;
    readonly args: Array<any>;
    readonly argskw: Object;
    msgCode(): number;
}
