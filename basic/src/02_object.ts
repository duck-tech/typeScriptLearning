// let employee: {
//     id: number;
//     name: string;
// } = {id: 1, name: 'Mosh'};

// employee.id = 0; 

// readonly: 只能讀取，不能寫入
// retire 是一個方法，這個方法接受一個 Date 型別的參數，並且沒有返回值。
let employee: {
    readonly id: number;
    name: string;
    retire: (date: Date) => void 
} = { 
    id: 1, 
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
}

// Video 2

const User = {
    name: 'duck',
    email: 'duck@mail.com',
    isActive: true,
}


function createCourse():{name:string, price:number}{
    return {name: 'reactjs', price:399}
}