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