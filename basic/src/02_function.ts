// function calculateTax(income: number, taxYear?: number): number {
//     if ((taxYear || 2022) < 2022) 
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000)


function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.3;
}

function signUpUser(name: string, email: string, isPaid: boolean ){
    console.log(name, email, isPaid)
} 
signUpUser('Duck','ducks@mail.com', false)

let loginUser = (username: string, password: string, isPaid:boolean = false) => {console.log(username, password, isPaid)}
loginUser('h','k@k.com')


function addTwo (num: number): number{
    // return 'hello' 
    return num + 2
}

const heros = ['thor','spiderman','ironman']

heros.map((hero): string => {
    return `hero is ${hero}`
})

// 表示該函數不返回任何值。也就是說，該函數被調用後，我們不期望從它那裡獲得任何結果
// 例如，一個僅用於輸出日誌信息的函數可能就會使用 void 作為返回型別。
function consoleError (errmsg: string):void {
    console.log(errmsg)
}

// 表示該函數永遠不會返回結果。這可能是因為該函數會無限循環，或者它會總是拋出一個錯誤。
// 因此，never 型別表示的是一種無法達成的狀態。
function handleError (errmsg: string): never {
    throw new Error(errmsg)
}

// void 和 never 的主要區別在於：void 表示一個函數不返回任何值，而 never 表示一個函數永遠不會返回結果。

