import { IMessage } from './Message';
export declare class HelloMessage implements IMessage {
    private realm;
    private details;
    static MSG_HELLO: number;
    constructor(realm: string, details: any);
    wampifiedMsg(): any[];
    msgCode(): number;
}
