import { RegisterOptions } from './Observable/RegisterObservable';
import { PublishOptions, TopicOptions } from './Observable/TopicObservable';
import { ChallengeMessage } from './Messages/ChallengeMessage';
import { CallOptions } from './Observable/CallObservable';
import { WelcomeMessage } from './Messages/WelcomeMessage';
import { ResultMessage } from './Messages/ResultMessage';
import { RegisteredMessage } from './Messages/RegisteredMessage';
import { UnregisteredMessage } from './Messages/UnregisteredMessage';
import { EventMessage } from './Messages/EventMessage';
import { IMessage } from './Messages/Message';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/exhaust';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/race';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/throw';
export declare class Client {
    private subscription;
    private _session;
    private _transport;
    private _onClose;
    private static roles();
    private challengeCallback;
    constructor(urlOrTransportOrObs: string | Subject<IMessage> | Observable<ThruwayConfig>, realm?: string, options?: WampOptions);
    topic(uri: string, options?: TopicOptions): Observable<EventMessage>;
    publish<T>(uri: string, value: Observable<T> | any, options?: PublishOptions): Subscription;
    call(uri: string, args?: Array<any>, argskw?: Object, options?: CallOptions): Observable<ResultMessage>;
    register(uri: string, callback: Function, options?: RegisterOptions): Observable<RegisteredMessage | UnregisteredMessage>;
    progressiveCall(uri: string, args?: Array<any>, argskw?: Object, options?: CallOptions): Observable<ResultMessage>;
    progressiveRegister(uri: string, callback: Function, options?: RegisterOptions): Observable<any>;
    onChallenge(challengeCallback: (challenge: Observable<ChallengeMessage>) => Observable<string>): void;
    private challenge;
    close(): void;
    open(): void;
    readonly onOpen: Observable<SessionData>;
    readonly onClose: Observable<IMessage>;
}
export interface RetryOptions {
    maxRetryDelay?: number;
    initialRetryDelay?: number;
    retryDelayGrowth?: number;
    maxRetries?: number;
}
export declare const retryWhen: (retryOptions?: RetryOptions) => (attempts: Observable<Error>) => Observable<number>;
export interface WampOptions {
    authmethods?: Array<string>;
    roles?: Object;
    role?: string;
    retryWhen?: (attempts: Observable<Error>) => Observable<any>;
    retryOptions?: RetryOptions;
    timeout?: number;
    [propName: string]: any;
}
export interface SessionData {
    messages: Observable<IMessage>;
    transport: Subject<IMessage>;
    welcomeMsg: WelcomeMessage;
}
export interface ThruwayConfig {
    autoOpen?: boolean;
    url: string;
    realm: string;
    options: WampOptions;
}
export interface TransportData {
    transport: Subject<IMessage>;
    realm: string;
    options: WampOptions;
}
export { IMessage };
