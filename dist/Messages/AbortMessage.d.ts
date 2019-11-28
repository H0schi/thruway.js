import { IMessage } from './Message';
export declare class AbortMessage implements IMessage {
    private _details;
    private _reason;
    static MSG_ABORT: number;
    constructor(_details: Object, _reason: string);
    wampifiedMsg(): any[];
    readonly reason: string;
    readonly details: any;
    msgCode(): number;
}
