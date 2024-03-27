import { CheckoutObserver, CheckoutSubject } from "./CheckoutObserver";


class CheckoutSubjectImpl implements CheckoutSubject {
    private observers: CheckoutObserver[] = [];

    attach(observer: CheckoutObserver): void {
        this.observers.push(observer);
    }

    detach(observer: CheckoutObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(): void {
        this.observers.forEach(observer => observer.update());
    }
}
export default CheckoutSubjectImpl;

