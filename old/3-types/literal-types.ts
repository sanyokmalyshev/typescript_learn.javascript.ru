// let digit: 0 | 1 | 2 | 3 = 1;

// interface AnimationOptions {
//     delay: number,
//     type: 'ease-in' | 'ease-out'
// }

// function animate(options: AnimationOptions) {

// }

// animate({delay: 3000, type: 'ease-in'});

// let num: keyof AnimationOptions = 'delay';

interface IFact {
    factId: number;
    user: string;
    value: any;
}

const dataList: {action: string, data: IFact}[] = [];

const uniqueValue = (): keyof IFact => {
    return 'factId';
}

dataList.map((item) => {
    if(item.data[uniqueValue()] === 2) {
        return {...item}
    }
    return item;
})

enum Action {
    CREATE = 'REATE',
    REMOVE = 'EMOVE'
}

let action: keyof typeof Action;