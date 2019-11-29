import { WampInvocationException } from '../Common/WampInvocationException';
import { IMessage } from '../Messages/Message';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';
import { Scheduler } from 'rxjs/Scheduler';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/concat';
export interface RegisterOptions {
    progress?: boolean;
    invoke?: string | 'first' | 'last' | 'roundrobin' | 'random' | '_thruway' | 'single' | 'all';
    match?: string | 'prefix' | 'wildcard' | 'exact';
    disclose_caller?: boolean;
    force_reregister?: boolean;
    replace_orphaned_sessions?: boolean | 'yes' | 'no';
    expanded?: boolean;
    [propName: string]: any;
}
export declare class RegisterObservable<T> extends Observable<T> {
    private uri;
    private callback;
    private webSocket;
    private options;
    private scheduler;
    private messages;
    private invocationErrors;
    constructor(uri: string, callback: Function, messages: Observable<IMessage>, webSocket: Subject<any>, options?: RegisterOptions, invocationErrors?: Subject<WampInvocationException>, scheduler?: Scheduler);
    _subscribe(subscriber: Subscriber<any>): Subscription | Function | void;
}
