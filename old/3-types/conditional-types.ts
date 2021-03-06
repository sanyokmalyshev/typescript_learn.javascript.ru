// T extends U ? X : Y

// type nonUndefined<T> = T extends undefined ? never : T;

// const value: nonUndefined<string | undefined | number> = true;

// type excludeFactId<T> = T extends 'factId' ? never : T;

// interface IFact {
//     factId: number;
//     user: any;
//     value: string
// }

// const value: excludeFactId<keyof IFact> = 'value';

// interface IUser {
//     name: string;
//     age: number;
// }

// const arr: [() => IUser, () => number | null] = [
//     () => ({ name: 'Andrew', age: 25 }),
//     () => null,
// ];

// type FirstElementReturnType<T> = T extends [infer U, ...unknown[]]
//     ? U extends (...args: unknown[]) => infer R
//         ? R
//         : never
//     : never;

// let value: FirstElementReturnType<typeof arr> = 1;

function fn(_a: number, _b: string): boolean {
    return true;
}

type NonFunction<T> = T extends Function ? never : T;

type FunctionsParamsAndReturn<T> = T extends (...args: infer Args) => infer R
    ? NonFunction<Args[keyof Args]> | R
    : never;

const val1: FunctionsParamsAndReturn<typeof fn> = 1;

let a: Exclude