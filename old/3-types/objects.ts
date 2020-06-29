// let user: {
//     readonly firstName: string,
//     readonly age?: number;
// } = {
//     firstName: 'Igor',
//     age: 34
// }

// // user.firstName = 'Sanyok'
// // user.age = 32;

// let keys: keyof typeof user;
// let value: (typeof user)[keyof typeof user] = '1';

// let hashMap: { [key: string]: typeof user } = {
//     kjlkj: user,
// }


// let arr: readonly number[] = [1, 2, 3, 4];

// let tupleArr: [string, number] = ["", 2];
// tupleArr.push(12);
// console.log(tupleArr);

// const str = "const string" as const;
// let a: typeof str = "4df";

// let arr = [1, 2, 3, 4] as const;

// let user1 = {
//     firstName: "Igor",
//     age: 34,
// } as const;

// user1.age = 33;

// type TUSER = {
//     readonly firstName: string;
//     readonly age?: number;
// };
// interface TUSER {
//     readonly firstName: string;
//     readonly age?: number;
