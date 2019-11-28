import { IMessage } from './Message';
export declare class PublisedMessage implements IMessage {
    static MSG_PUBLISHED: number;
    wampifiedMsg(): Array<any>;
    msgCode(): number;
}
