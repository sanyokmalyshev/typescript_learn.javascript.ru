let num: number | null = 1;
num = NaN;
num = 0x0202;
num = null;

let bool: boolean = true;

let nill: null = null;
let und: undefined;

let bigNum: bigint = 4n;

const key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3: symbol = Symbol('key3');

let strictObj = {
    [key1]: 100,
    [key2]: 'TS',
    [key3]: 'Angular'
}

let v1 = strictObj[key2];