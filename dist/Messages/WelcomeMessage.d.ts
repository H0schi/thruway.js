import { IMessage } from './Message';
export declare class WelcomeMessage implements IMessage {
    private _sessionId;
    private _details;
    static MSG_WELCOME: number;
    constructor(_sessionId: number, _details: any);
    wampifiedMsg(): any[];
    readonly sessionId: number;
    readonly details: any;
    msgCode(): number;
}
