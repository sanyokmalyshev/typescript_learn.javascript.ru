// virtual - real

interface UserAccount {
    name: string;
    age: number;
}

// let person1: UserAccount  = UserAccount;

let userAccount = {
    name: 'Igor',
    age: 26
}
let person2: typeof userAccount = {
    name: 'Andre',
    age: 21
}

class Point {
    public x = 10;
}

let p: Point = new Point();

let num = 'sd';
