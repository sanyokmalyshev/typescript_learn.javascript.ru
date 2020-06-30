// type,  interface, function, classes

// type Info = {
//     salary: number
// }

// interface IAccount<UserInfo extends Info & {male: boolean}, UserId = string> {
//     id: UserId;
//     name: string;
//     info: UserInfo
// }

// let user: IAccount<{male: boolean, salary: number}> = {
//     id: 'adfadsf',
//     name: 'Andrew',
//     info: {
//         male: true,
//         salary: 3000
//     }
// }
// let admin: IAccount<{salary: number, subjects: string[], male: boolean}, number> = {
//     id: 2452435,
//     name: 'sanyok',
//     info: {
//         salary: 3000,
//         subjects: ['TS', 'JS'],
//         male: true
//     }
// }

interface IUser {
    name: string;
    age: number;
}

interface IProduct {
    name: string;
    price: number;
}

interface ICart extends IProduct {
    count: number;
}

type TState = {
    user: IUser;
    products: IProduct[];
    cart: ICart[];
};

const state: TState = {
    user: { name: 'Sanyok', age: 26 },
    products: [{ name: 'iphone 8', price: 200 }],
    cart: [{ name: 'iphone 8', price: 200, count: 2 }],
};

type Select<State> = <Field extends keyof State>(
    state: State,
    field: Field
) => State[Field];
const select: Select<TState> = (storeState, field) => storeState[field];

const user1: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
const cart: ICart[] = select(state, 'cart');


function getProperty<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
    return obj[key];
}

const key = 'key1';
getProperty({a: 1}, 'a');