# TypeScript Real Project

## outline

- setup environment
- class
- public and private
- getters and setters
- protected
- interface and class
- abstract class
- generics
- type Narrowing (in, instanceof, Type Predicates)
- Discriminated Union and Exhaustiveness checking

## setup environment

```bash
tsc --init
npm init -y
mkdir index.html
mkdir src dist
npm i lite-server 
```

in package.json

```javascript
"scripts": {
    "start": "lite-server"
  }
```

## class

在 TypeScript 中，class 是一種使用面向對象編程方法的主要方式。它讓你能夠創建具有特定屬性和方法的對象模板。以下是對您提供的 User 類的介紹，這將幫助您理解 TypeScript 中類的基本概念和用法。

```typescript
class User {
    email: string
    name: string
    city: string = ''
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
} 

const duck = new User('duck@mail.com', 'TestUser')
duck.city = 'Taipei'
```

- 屬性（Properties）：類的屬性是類中定義的變量。在這個例子中，email、name 和 city 是 User 類的屬性。屬性 city 被賦予了預設值為空字符串 ''，這意味著如果在創建 User 對象時沒有指定 city，它將預設為空字符串。

- 構造函數（Constructor）：constructor 是一個特殊的方法，它會在創建類的新實例時自動調用。在這個例子中，構造函數接受 email 和 name 兩個參數，並將它們賦值給對應的屬性。

- 方法（Methods）：雖然在您提供的代碼中沒有定義類的方法，但您可以在類中定義方法來表示對象的行為。方法是在類的內部定義的函數。

## public and private

在 TypeScript 中，您可以使用 public 和 private 關鍵字來定義類的屬性和方法的可見性。這些關鍵字用於限制對類的屬性和方法的訪問權限。

```typescript
class User {
    readonly city: string = ''
    constructor(public email: string, public name: string, private userId: string) {
    }
} 

const duck = new User('duck@mail.com', 'TestUser')
```

## Getters and Setters

在 TypeScript 中，使用 getter 和 setter 方法可以非常有效地封裝對象的屬性，同時提供對這些屬性訪問和賦值時的額外控制和邏輯處理。這裡將通過您提供的 User 類來說明 getter 和 setter 的用途及其優點。

- 封裝性（Encapsulation）：Getter 和 setter 允許類隱藏其內部狀態和實現細節，僅通過這些方法暴露對象的屬性。這樣，類的使用者不需要知道或關心對象狀態的管理方式，只需通過設定的接口進行互動。

- 驗證和控制（Validation and Control）：Setter 方法使得在屬性被賦新值之前進行驗證成為可能。這意味著可以防止對象進入無效狀態或者對輸入進行清理和格式化，從而保證數據的正確性和一致性。

```typescript
class User {
    private _courseCount = 1
    readonly city: string = ''
    constructor(
        public email: string, 
        public name: string, 
        private userId: string
        ){
    }
    // getter and setter 
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNum        
    }
} 
```

- 提高數據安全性：通過 setter 方法，您可以添加邏輯來防止不合法的數據賦值給對象。比如，在 User 類中，courseCount 的 setter 防止將課程數量設置為 1 或更小，這保證了 courseCount 始終保持在一個合理的範圍。

- 增強靈活性和可維護性：如果未來對屬性的訪問或賦值邏輯需要修改，您可以只在 getter 或 setter 中進行修改，而不需要尋找和更改每一處直接訪問或修改該屬性的代碼，這大大提高了代碼的可維護性。

- 額外邏輯處理：Getter 和 setter 允許在讀取或賦值過程中執行額外的邏輯，比如格式化或計算衍生屬性。在 User 類的例子中，getAppleEmail getter 通過添加前綴 apple 來格式化郵件地址，這種衍生屬性在不修改原有數據的基礎上提供了額外的信息。

- 兼容性：即使後來需要對類的某些屬性進行內部結構調整，使用 getter 和 setter 也能保證對外的接口不變，從而不影響現有使用該類的代碼。

## protected

在 TypeScript 中，使用 protected 關鍵字可以限制對類的屬性和方法的訪問權限。protected 關鍵字與 private 關鍵字的作用類似，但有一個重要的區別：protected 屬性和方法可以在子類中訪問，而 private 屬性和方法則不能。

```typescript
    class User {
    // private _courseCount = 1
    protected _courseCount = 1
    readonly city: string = ''
} 

class SubUser extends User {
    isFamily: boolean = true 
    changeCourseCount () {
        this._courseCount = 10
    }
    
}
```

## interface and class

在 TypeScript 中，interface 是一種用於定義對象的結構的類型。它可以用於定義對象的屬性和方法，並且可以被類實現。

```typescript
interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number, 
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){}    
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string,
    ){} 
    
    createStory(): void {
        console.log('Story was created')
    }
}
```

## abstract class

抽象類（Abstract Class）在程式設計中，特別是在使用類型腳本（TypeScript）或其他支持面向對象編程（OOP）語言時，是一個基本概念。我們可以用一個簡單的比喻來理解抽象類：想像抽象類是一本食譜書，這本書裡面有很多未完成的食譜。每個食譜都告訴你需要什麼成分，但沒有說明如何具體做這道菜。如果你想按照食譜做菜，你需要自己添加具體的做菜步驟。

在這個比喻中，食譜書就是抽象類，每個食譜是抽象類中的一個抽象方法。當你創建一個基於這本食譜書的具體菜譜時，你實際上是在創建一個繼承了抽象類的子類，並且你需要為那些抽象食譜（抽象方法）提供具體的做菜步驟（實現方法）。

- 不能直接實例化：就像你不能從一本只有成分沒有步驟的食譜書中直接做出一道菜，抽象類不能被直接用來創建對象。它們需要被繼承，其抽象方法需要在子類中被具體實現。

- 可以包含抽象方法和具體方法：抽象類中可以有一些已經實現的方法（比如一些通用的步驟），也可以有一些只有定義沒有實現的抽象方法（需要子類去完成的步驟）。

- 用於定義模板：抽象類通常用來定義一組操作的模板，讓子類按照這個模板進行擴展。這就像食譜書提供了做菜的框架，而具體的菜譜則根據這個框架來完成具體的菜品。

```typescript
abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void

    getRealTime(): number {
        // some complex calculation
        return 8
    }
}


class Ins extends TakePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string,
        public burst: number)
        {
            super (cameraMode, filter)
        }

    getSepia(): void {
        console.log('Sepia was applied')
    }
}

const dc = new Ins('test', 'Test',3)
dc.getRealTime()
```

## generics

泛型（Generics）是程式設計中一種非常強大的概念，用於增強程式碼的靈活性、重用性和安全性。在 TypeScript 中，泛型讓你能夠在定義函數、接口、類時不具體指定它們將要操作的數據類型。這種類型將在程式碼被使用時確定下來。使用泛型可以讓你寫出更加通用和靈活的程式碼，同時保持嚴格的類型安全。

```typescript
function identityThree<Type>(val: Type): Type {
    return val 
}

identityThree(true)

function identityFour<T>(val: T):T {
    return val 
}

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
```

## type Narrowing

```typescript
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

// The in operator narrowing 
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

// instance of 
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
```

## Discriminated Union and Exhaustiveness checking

```typescript
interface Circle {
    kind: 'circle',
    radius : number 
  } 

interface Square {
    kind: 'square',
    side: number
  }

interface Rectangle {
    kind: 'rectangle',
    length: number, 
    width: number
}

type Shape = Circle | Square | Rectangle 

// function getTrueShape(shape: Shape){
//     if (shape.kind === 'circle') {
//         return Math.PI * shape.radius ** 2
//     }
//     return shape.side * shape.side
// }

function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.side * shape.side
        case 'rectangle':
            return shape.length * shape.width
        default: 
            const _defaultforshape: never = shape
            return _defaultforshape}
}
```

Code Sample 
[1. Class](./2_realproject/src/index.ts): class, private and public, getter and setter, protected 
[2. interface class](./2_realproject/src/interface.ts)
[3. abstract class](./2_realproject/src/abstractClass.ts)
[4. generics](./2_realproject/src/generics.ts)
[5. type Narrowing](./2_realproject/src/detection.ts): type Narrowing, Discriminated Union and Exhaustiveness checking