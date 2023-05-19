/* Переменные */
export let eventSubscriptions: MyInputEvent[] = [];

/* Типы */
export type MyInputEvent = {
    target: string | HTMLInputElement;
}

export type MyCallback = {
    func: {
        void: void,
        errors: Error,
    },
}

export type MyEvent = {
    'new-message': (payload: { message: string, errors: Error }) => void;
    'error-message': (payload: { message: string, reasone: Error }) => void;
}

/* Классы */
export class Events {
    /* Подписка на событие */
    on(event: MyInputEvent, callback: MyCallback): Promise<boolean>  {
        return new Promise((res, rej) => {
            if (!eventSubscriptions.includes(event)) 
                eventSubscriptions.push(event);
            else {
                eventSubscriptions = eventSubscriptions.filter((e) => e !== event);
            }
            res(true);
        })
    }

    /* Отписка от события */
    off(event: MyInputEvent, callback: MyCallback): Promise<boolean> {
        return new Promise((res, rej) => {
            eventSubscriptions = eventSubscriptions.filter((e) => e !== event);
            res(true);
        })
    }

    /* Эмит события */
    emit(event: MyInputEvent, callback: MyCallback): Promise<boolean> {
        return new Promise((res, rej) => {
            res(true);
        })
    }
}
