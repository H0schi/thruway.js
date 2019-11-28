import {IMessage} from './Message';

export class PublisedMessage implements IMessage {

    static MSG_PUBLISHED = 17;

    wampifiedMsg(): Array<any> {
        return undefined;
    }

    msgCode(): number {
        return PublisedMessage.MSG_PUBLISHED;
    }
}
