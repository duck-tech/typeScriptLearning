// null check 
type Custormer = {
    birthday: Date; 
}

function getCustomer(id: number): Custormer | null | undefined {
// 如果 id 等於 0，則返回 null
// 否則，返回一個物件，這個物件有一個名為 'birthday' 的屬性，其值為當前日期和時間
    return id == 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0); 
// if (customer !== null && customer !== undefined) 
//     console.log(customer.birthday)

//Optional property access operator
// 如果 customer 物件存在，則嘗試訪問其 birthday 屬性
// 如果 customer 物件不存在（即為 undefined 或 null），則返回 undefined，而不會產生錯誤)
console.log(customer?.birthday); // undefined 

customer = getCustomer(1); 
console.log(customer?.birthday?.getFullYear()); 

// optional element access operator 
// customers?.[0]

// optional call operator
// 使用選擇性調用運算符嘗試調用 log 函數
// 如果 log 是一個函數，則調用它並傳入參數 'a'
// 如果 log 不是一個函數（例如在這個例子中，它是 null），則不進行任何操作，也不會產生錯誤
let log: any = null
log?.('a')