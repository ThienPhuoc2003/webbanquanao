export interface CheckoutSubject {
    attach(observer: CheckoutObserver): void;
    detach(observer: CheckoutObserver): void;
    notify(): void;
}

export interface CheckoutObserver {
    update(): void;
}
