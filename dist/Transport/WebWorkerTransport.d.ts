import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';
export declare class WebWorkerTransport<Message> extends Subject<any> {
    private workerName;
    private url;
    private protocols;
    private open;
    private close;
    private output;
    private worker;
    constructor(workerName?: string, url?: string, protocols?: string | string[], open?: Subject<{}>, close?: Subject<{}>);
    _subscribe(subscriber: Subscriber<any>): Subscription;
    next(msg: any): void;
    unsubscribe(): void;
}
