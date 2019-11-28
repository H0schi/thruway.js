import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { IMessage } from '../Messages/Message';
import { Subject } from 'rxjs/Subject';
import { Scheduler } from 'rxjs/Scheduler';
export interface CallOptions {
    receive_progress?: boolean;
    timeout?: number;
    disclose_me?: boolean;
    [propName: string]: any;
}
export declare class CallObservable<ResultMsg> extends Observable<any> {
    private uri;
    private webSocket;
    private args;
    private argskw;
    private options;
    private scheduler;
    private completed;
    private messages;
    constructor(uri: string, messages: Observable<IMessage>, webSocket: Subject<any>, args?: Array<any>, argskw?: Object, options?: CallOptions, scheduler?: Scheduler);
    _subscribe(subscriber: Subscriber<any>): Subscription | Function | void;
}
