import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class ErrorMessage implements IMessage {
    private _errorMsgCode;
    private _errorRequestId;
    private _details;
    private _errorURI;
    private _args;
    private _argskw;
    static MSG_ERROR: number;
    static createErrorMessageFromMessage(msg: IRequestMessage, errorUri?: string): ErrorMessage;
    constructor(_errorMsgCode: number, _errorRequestId: number, _details: Object, _errorURI: string, _args?: Array<any>, _argskw?: Object);
    wampifiedMsg(): Object[];
    readonly errorMsgCode: number;
    readonly errorRequestId: number;
    details: Object;
    readonly errorURI: string;
    args: Array<any>;
    argskw: Object;
    msgCode(): number;
}
