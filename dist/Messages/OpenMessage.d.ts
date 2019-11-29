import { IMessage } from './Message';
export declare class OpenMessage implements IMessage {
    private _details;
    static MSG_OPEN: number;
    constructor(_details: {
        event: Event;
    });
    wampifiedMsg(): (number | {
        event: Event;
    })[];
    readonly details: any;
    msgCode(): number;
}
