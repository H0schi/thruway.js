import { IMessage } from './Message';
export declare class GoodbyeMessage implements IMessage {
    private _details;
    private _uri;
    static MSG_GOODBYE: number;
    constructor(_details: Object, _uri: string);
    wampifiedMsg(): Object[];
    readonly uri: string;
    readonly details: Object;
    msgCode(): number;
}
