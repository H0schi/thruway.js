import {IMessage} from './Message';
import {IRequestMessage} from './IRequestMessage';

export class ErrorMessage implements IMessage {

    static MSG_ERROR = 8;

    public static createErrorMessageFromMessage(msg: IRequestMessage, errorUri?: string): ErrorMessage {
        if (errorUri === null) {
            errorUri = 'wamp.error.unknown';
        }

        return new ErrorMessage(msg.msgCode(), msg.requestId, {}, errorUri);
    }

    constructor(private _errorMsgCode: number,
                private _errorRequestId: number,
                private _details: Object,
                private _errorURI: string,
                private _args: Array<any> = [],
                private _argskw: Object = {}) {
    }

    public wampifiedMsg() {
        const r = [ErrorMessage.MSG_ERROR, this._errorMsgCode, this._errorRequestId, this._details, this._errorURI];
        if (Object.keys(this._argskw).length !== 0) {
            r.push(this._args, this._argskw);
            return r;
        }
        if (this._args.length !== 0) {
            r.push(this._args);
        }
        return r;
    }

    get errorMsgCode(): number {
        return this._errorMsgCode;
    }

    get errorRequestId(): number {
        return this._errorRequestId;
    }

    get details(): Object {
        return this._details;
    }

    get errorURI(): string {
        return this._errorURI;
    }

    get args(): Array<any> {
        return this._args;
    }

    get argskw(): Object {
        return this._argskw;
    }

    set details(value: Object) {
        this._details = value;
    }

    set args(value: Array<any>) {
        this._args = value;
    }

    set argskw(value: Object) {
        this._argskw = value;
    }

    msgCode(): number {
        return ErrorMessage.MSG_ERROR;
    }
}
