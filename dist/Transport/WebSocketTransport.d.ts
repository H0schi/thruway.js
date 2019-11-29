import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
export declare class WebSocketTransport<M> extends Subject<M> {
    private url;
    private protocols;
    private closeSubject;
    private autoOpen;
    private output;
    private socket;
    private resetKeepaliveSubject;
    private keepAliveTimer;
    constructor(url?: string, protocols?: string | string[], closeSubject?: Subject<{}>, autoOpen?: boolean);
    _subscribe(subscriber: Subscriber<any>): Subscription;
    private connectSocket();
    private keepAlive(ws);
    next(msg: any): void;
    unsubscribe(): void;
    open(): void;
}
