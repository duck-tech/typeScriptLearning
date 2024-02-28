function detectType(val: number | string) {
    if (typeof val === 'string'){
        return val.toLowerCase()
    }
    return val + 3 
} 

function provideId(id: string | null){
    if (!id) {
        console.log('Please provide iID');
        return 
    }
    id.toLowerCase()
}

// in operator Narrowing 

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string, 
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin){
    if ('isAdmin' in account) {
        return account.isAdmin
    } 
}

// instance of narrowing: 當使用 instanceof 進行條件檢查時，如果對象是由右側提供的類（或其任何父類）實例化的，則運算符返回 true，否則返回 false。
function logValue(x:Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}

type Fish = {swim: () => void }
type Bird = {fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return 'fish food'
    } else {
        pet 
        return 'bird food '
    }
}