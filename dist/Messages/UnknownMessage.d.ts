import { IMessage } from './Message';
export declare class UnknownMessage implements IMessage {
    static MSG_UNKNOWN: number;
    wampifiedMsg(): Array<any>;
    msgCode(): number;
}
