// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase: 首字母大寫
const enum Size{ Small = 1, Medium, Large }
let mySize: Size = Size.Medium 
console.log(mySize)

// Video2 : 限制用戶選擇

const enum SeatChoice {
    AISLE = 'aisle',
    MIDDLE = 3,
    WINDOW, 
    FOURTH
}

const userSeat = SeatChoice.AISLE
