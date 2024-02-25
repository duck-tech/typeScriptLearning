function kgToLbs(weight: number | string): number {
    // Narrowing: 透過 union type 的特性，我們可以使用 typeof 來縮小範圍
    if (typeof weight === 'number') 
        return weight * 2.2;
    else 
       return parseInt(weight) * 2.2;
}

kgToLbs(10)
kgToLbs('10kg')