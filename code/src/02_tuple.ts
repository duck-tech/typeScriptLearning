// 對於每個使用者會想要表示兩個值，一個是使用者的id，另一個是使用者的名字
// 1, 'Mosh'
let user: [number, string] = [1, 'Mosh']
user.push(1)
console.log(user)

// Video 2 
let tUser: [string, number, boolean]
tUser = ['Mosh', 1, true]

let rgb: [number, number, number] = [255, 0, 0]

type aUser = [number, string]
const newUser: aUser = [112, 'example@mail.com']

// tuple 的一些問題
newUser[1] = 'hc.com' // 改變值
newUser.push('fdf') // 可以 push 進去