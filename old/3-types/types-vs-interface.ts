// type acc = {
//     name: string;
//     age: number
// }

// let user: acc;

// Object/function

// interface Ipoint {
//     x: number;
//     y: number;
// }

// type TPoint = {
//     x: number;
//     y: number;
// }
// let point1: TPoint = {
//     x: 1,
//     y: 1
// }

// interface ISetPoint {
//     (x: number, y: number): void;
// }
// type tSetPoint = (x: number, y: number) => void;


// extend
type PartialPoint = {
    x: number;
}


interface IpartialPoint {
    y: number;
}

//type Point = PartialPoint & IpartialPoint;

interface Point extends PartialPoint, IpartialPoint {

}

let p1: Point = {
    x: 1,
    y: 1
}

// implements
// type snd = string | number;

class BasePoint implements PartialPoint, IpartialPoint {
    public x: number = 10;
    public y: number = 10;
}

// const user: TAccount = {
//     name: 'Andre',
//     age: 32
// }


interface TAccount {
    name: string;
}
interface TAccount {
    age: number;
}

class Acc implements TAccount {
    public name: string = 'Sanyok';
    public age: number = 22
}






