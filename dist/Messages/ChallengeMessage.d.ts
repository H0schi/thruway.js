import { IMessage } from './Message';
export declare class ChallengeMessage implements IMessage {
    private _authMethod;
    private _extra;
    static MSG_CHALLENGE: number;
    constructor(_authMethod: string, _extra: Object);
    wampifiedMsg(): Object[];
    readonly authMethod: string;
    readonly extra: Object;
    msgCode(): number;
}
