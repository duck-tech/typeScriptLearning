// JavaScript can have an array of mixed types
// let number = [1,2,'3'];

// However, TypeScript will not allow this
let numbers: number[] = [1,2,3];

// We need to avoid using the any type
let numbers_2 = [] // Any Array
numbers_2[0] = 1;
numbers_2[1] = '2';

// This is allowed in TypeScript
let numbers_3: number[] = [];

// Video 2
const superHeros: string[] = []
// const heroPower: number[] = []
const heroPower: Array<number> = []

const MLModels: number[][] = [
    [255,255,255],
    [0,0,0],
    [1,2,3]
]

superHeros.push('Superman');
heroPower.push(100);

type superUser = {
    name: string,
    isActivated: boolean    
}

const allUsers: superUser[] = []

allUsers.push({name: 'Clark Kent', isActivated: true})


