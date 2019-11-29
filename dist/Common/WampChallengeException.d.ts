import { ChallengeMessage } from '../Messages/ChallengeMessage';
import { WampErrorException } from './WampErrorException';
import { AbortMessage } from '../Messages/AbortMessage';
export declare class WampChallengeException extends WampErrorException {
    private challengeMessage;
    constructor(challengeMessage: ChallengeMessage, errorUri?: string);
    abortMessage(): AbortMessage;
}
