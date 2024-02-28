/*
interface bUser {
    readonly dbId: number
    email: string
    userId: number
    googleId ?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value:number): number
}

const duck: bUser ={
    dbId: 22,
    email: 'k@k.com',
    userId: 2211,
    startTrail: () => {
        return 'trail started'
    },
    getCoupon: (name: 'duck10', off: 10) => {
        console.log(name, off)        
        return 10
}}
**/

interface bUser {
    readonly dbId: number
    email: string
    userId: number
    googleId ?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value:number): number
}

interface bUser {
    githubToken: string
}

interface TAdmin extends bUser {
    role: 'admin' | 'ta' | 'learner'
}

const duck2: TAdmin ={
    dbId: 22,
    email: 'k@k.com',
    role: 'admin',
    userId: 2211,
    startTrail: () => {
        return 'trail started'
    },
    getCoupon: (name: 'duck10', off: 10) => {
        console.log(name, off)        
        return 10
},
    githubToken: 'github'
}