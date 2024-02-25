// Literal (exact, specific value)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm';

// Nullable Types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else // null or undefined 
        console.log('Hola')
}

greet(null)
greet(undefined)