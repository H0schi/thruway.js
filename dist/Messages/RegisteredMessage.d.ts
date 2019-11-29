import { IMessage } from './Message';
import { IRequestMessage } from './IRequestMessage';
export declare class RegisteredMessage implements IMessage, IRequestMessage {
    private _requestId;
    private _registrationId;
    static MSG_REGISTERED: number;
    constructor(_requestId: number, _registrationId: number);
    wampifiedMsg(): number[];
    readonly requestId: number;
    readonly registrationId: number;
    msgCode(): number;
}
