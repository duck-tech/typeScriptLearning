// The any type

// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let is_published: boolean = true;

// 我們可以刪除型別宣告，TypeScript 會自動推斷型別
// 在實踐時, 我們應該避免使用 any 型別, 因為它會讓程式碼失去型別檢查的好處
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level; // 這裡的 level 是 any 型別, 也就是說可以是任何型別
level = 1;
level = 'a';

// 這裡的 document 是 any 型別
// function render(document: any){
//     console.log(document);
// }
