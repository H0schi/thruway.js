import { IMessage } from './Message';
export declare class AuthenticateMessage implements IMessage {
    private _signature;
    private _extra;
    static MSG_AUTHENTICATE: number;
    constructor(_signature: string, _extra?: Object);
    wampifiedMsg(): Object[];
    readonly signature: string;
    readonly extra: Object;
    msgCode(): number;
}
