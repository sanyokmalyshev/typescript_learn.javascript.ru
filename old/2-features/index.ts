let a = [1, 2, 3].includes(1)

// let/const
let period  = 50;
const baseUrl = 'http://expample.com';

// object
let firstName  = 'Igor';
let accont = {
    firstName,
    getName() {
        return this.firstName;
    }
}

// spread operator
let person = {...accont};
let dates = [...[11, 12, 13]]

// destructoring
let {firstName: myName} = person;
let [firstDate] = dates;

// template string
function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof person): string {
    return `${start}${name}${end}`
}

console.log(userMessage`Good Day, ${person} !!`);

// for of

for(const date of dates) {
    console.log(date);
}

// arrow

// let summ =  (a: number, b: number) => a + b;

// Class
class Point {
    public x = 10;

    sum() {
        return this.x;
    }
}

// OPtional chaining
const user: any = {};
let x = user?.info?.baz();

// ?????
let admin;
let p = admin ?? user;
