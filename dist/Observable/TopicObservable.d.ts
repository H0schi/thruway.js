import { IMessage } from '../Messages/Message';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';
export interface TopicOptions {
    disclose_publisher?: boolean;
    [propName: string]: any;
}
export interface PublishOptions {
    exclude_me?: boolean;
    disclose_me?: boolean;
    eligible?: Array<number>;
    eligible_authid?: Array<string>;
    eligible_authroles?: Array<string>;
    exclude?: Array<number>;
    exclude_authid?: Array<string>;
    exclude_authroles?: Array<string>;
    _thruway_eligible_authids?: Array<string>;
    _thruway_eligible_authroles?: Array<string>;
    [propName: string]: any;
}
export declare class TopicObservable<EventMsg> extends Observable<any> {
    private uri;
    private options;
    private messages;
    private websocket;
    constructor(uri: string, options: TopicOptions, messages: Observable<IMessage>, websocket: Subject<IMessage>);
    _subscribe(subscriber: Subscriber<any>): Subscription | Function | void;
}
