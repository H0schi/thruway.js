import { WampErrorException } from './WampErrorException';
import { InvocationMessage } from '../Messages/InvocationMessage';
import { ErrorMessage } from '../Messages/ErrorMessage';
export declare class WampInvocationException extends WampErrorException {
    private invocationMessage;
    static withInvocationMessageAndWampErrorException(invocationMessage: InvocationMessage, wee: WampErrorException): WampInvocationException;
    constructor(invocationMessage: InvocationMessage, errorUri?: string, args?: Array<any>, argskw?: Object, details?: Object);
    errorMessage: () => ErrorMessage;
}
