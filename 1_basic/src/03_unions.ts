function kgToLbs(weight: number | string): number {
    // Narrowing: 透過 union type 的特性，我們可以使用 typeof 來縮小範圍
    if (typeof weight === 'number') 
        return weight * 2.2;
    else 
       return parseInt(weight) * 2.2;
}

kgToLbs(10)
kgToLbs('10kg')

// Video 2 
let score: number | string  = 33
score = 44
score = '55'

type MUser = {
    name: string, 
    id:number
}

type Admin = {
    username: string, 
    id:number
}

let kelly: MUser | Admin = {
    name: 'kelly',
    id: 334,
}

kelly = {username: 'duck', id: 334}

// array 
const data: (string | number)[] = [1,2,3,4,'5']    