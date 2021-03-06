// type NonReadonly<T> = {
//     -readonly[P in keyof T]?: T[P]
// }



// let user: NonReadonly<User> = {
//     age: 26
// }

// user.age = 35;


type User = {
    readonly name: string;
    readonly age: number;
    info: { male: boolean, salary: number}
}

type RemoveByType<T, E> = {
    [P in keyof T]: E extends T[P] ? never : P
}[keyof T]

let p: RemoveByType<User, string> = true;


export enum MeterGeneralAction {
    RmdConnect = 'Connect',
    RmdDisconnect = 'RmdDisconnect',
}

export enum MeterGroupAction {
    InsertGroup = 'InsertGroup',
    AddToGroup = 'AddToGroup',
}

export enum MeterTaskAction {
    InitBaseSwap = 'InitBaseSwap',
    InitRegisterSwap = 'InitBaseSwap',
}

export type MeterActionsType =
    | MeterActionsType
    | MeterGroupAction
    | MeterTaskAction;

const meterActions = {
    'General': MeterGeneralAction,
    'Group': MeterGroupAction,
    'Tasks': MeterTaskAction
}

function performMeterAction({name: action}: {name: MeterActionsType}) {
    let isSwap = false;
    let swapType: number | null = null;
    switch (action) {
        case MeterTaskAction.InitBaseSwap: {
            isSwap = true;
            swapType = 0;
            return;
        }
        case MeterTaskAction.InitRegisterSwap: {
            isSwap = true;
            swapType = 0;
            return;
        }
    }
    componentLookup(action);
}

function componentLookup(_type: Exclude<MeterActionsType, MeterTaskAction>) {
    
}