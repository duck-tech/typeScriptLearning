// readonly: 只能讀取，不能寫入
// retire 是一個方法，這個方法接受一個 Date 型別的參數，並且沒有返回值。


// let employees: {
//     readonly id: number;
//     name: string;
//     retire: (date: Date) => void 
// } = { 
//     id: 1, 
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }


// Problem 1: 如果我想在加入一個新的員工，我需要重複定義一次這個物件，這樣會讓程式碼變得冗長。
// ＤＲＹ: Don't Repeat Yourself.

// Problem 2: 如果我想要修改這個物件的屬性，我需要修改所有的地方。
// Problem 3: 易讀性差

// Solution: 使用 type 別名
type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void
}

let employees : Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
}

// Video 2 Full TypeScript FreeCodeCamp Youtube
/**
 type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User{
    return {name: '', email:'', isActive:true}
}

createUser({name: '', email:'', isActive:true})

type Point = {
    x: number,
    y: number
}

function printCoord(pt: Point) {
    console.log(`The coordinate's x value is ${pt.x}`)
    console.log(`The coordinate's y value is ${pt.y}`) 
}

printCoord({x : 100, y: 100})
**/

type User = {
    readonly _id: string,
    name: string, 
    email: string,
    isActive: boolean
    credcardDetails ?: number
}

let myUser: User = {
    _id: '12456',
    name: 'd',
    email: 'd@mail.com',
    isActive: false
}

myUser.email = 'd@gmail.com'
// myUser._id = 123

type cardNumber = {
    cardnumber: string,
}

type cardDate = {
    cardData: string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}