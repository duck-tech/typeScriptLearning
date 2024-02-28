# TypeScript Advanced Type

這是一個紀錄TypeScript進階類型學習的文檔。

## Outline

- Type aliases
- Unions and intersections
- Type narrowing
- Literal types
- Nullable types
- Optional Chaining

## Type aliases

TypeScript 提供了一個 `type` 關鍵字，可以用來定義一個新的類型，這提供了一個更好的可讀性和可重用性。

```typescript
let employees: {
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

// Problem 1: 如果我想在加入一個新的員工，我需要重複定義一次這個物件，這樣會讓程式碼變得冗長。
// DRY: Don't Repeat Yourself.

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
```

code sample:
[Type Aliases](./code/src/03_aliases.ts): A sample for the `type aliases` in TypeScript.

## Unions and intersections and Type Narrowing

Unions 和 Intersections Unions 是變量或函數可以是多種類型的一種 (or) ，Intersections 是一個用於定義多個類型的交集 (and)。

```typescript
// unions 
function kgToLbs(weight: number | string): number {
    // Narrowing: 透過 union type 的特性，我們可以使用 typeof 來縮小範圍
    if (typeof weight === 'number') 
        return weight * 2.2;
    else 
       return parseInt(weight) * 2.2;
}

kgToLbs(10)
kgToLbs('10kg')
```

```typescript
// intersections
type Draggable = {
   drag: () => void 
};

type Resizable = {
   resize: () => void 
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}
```

code sample:
[Unions](./code/src/03_unions.ts): A sample for the `unions and intersections` in TypeScript.
[Interactions](./code/src/03_interaction.ts): A sample for the `interactions` in TypeScript.

## Literal types

Literal types 是一個特定值的類型，它可以是一個字面量，一個數字，一個字符串，或者一個布爾值。當我們使用 literal types 時，我們可以限制變量的值只能是特定的值。

```typescript
// Literal (exact, specific value)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm';
```

code sample:
[Literal Types](./code/src/03_literal_nullable.ts): A sample for the `literal types` in TypeScript.

## Nullable typess

Nullable types 是一個可以是 null 或者 undefined 的類型。在 TypeScript 中，會嚴格檢查 null 和 undefined 的值，這樣可以避免一些錯誤。

```typescript
// Nullable Types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else // null or undefined 
        console.log('Hola')
}

greet(null)
greet(undefined)
```

code sample:

[Nullable Types](./code/src/03_literal_nullable.ts): A sample for the `nullable types` in TypeScript.

## Optional Chaining

Optional Chaining 是一個用於檢查一個物件的屬性是否存在的方法。當我們使用 Optional Chaining 時，我們可以避免一些錯誤。

```typescript
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
```

code sample:
[Optional Chaining](./code/src/03_optional.ts): A sample for the `optional chaining` in TypeScript.
