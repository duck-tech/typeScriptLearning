const score: Array<number> = [] 
const names: Array<string> = []

function identityOne(val:boolean | number): boolean | number {
    return val
}

function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val 
}

identityThree(true)

function identityFour<T>(val: T):T {
    return val 
}

interface Bootle {
    brand: string, 
    type: number, 
}

// identityFour<Bootle>({}) // Error: Property 'brand' is missing in type '{}' but required in type 'Bootle'.

// Array generics and arror function 

function getSearchProducts<T>(products: T[]): T {
    // do some database operations 
    const myIndex = 3 
    return products[myIndex]
}

const getMoreSearchProducts = <T, >(products: T[]): T => {
    // do some database operations 
    const myIndex = 4 
    return products[myIndex]
}

// generics with class

function anotherFunction<T, U>(valOne:T, valTwo:U):object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3,'4')

function anotherFunction2<T, U extends number>(valOne:T, valTwo:U):object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction2(3,'4') // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

interface Database {
    connection: string,
    username: string, 
    password: string,
}

function anotherFunction3<T, U extends Database>(valOne:T, valTwo:U):object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction3(3, {connection: 'test', username: 'test', password: 'test'})

interface Quiz {
    name: string, 
    type: string, 
}

interface Course {
    name: string, 
    author: string, 
    subject: string, 
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
} 