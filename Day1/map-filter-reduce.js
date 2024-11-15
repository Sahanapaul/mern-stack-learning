//Map method
const number=[1,2,3,4,5];
const doubled =number.map(num=> num*2);
console.log(doubled);

//Filter method
const filter_number=[1,2,3,4,5];
evenNumbers=filter_number.filter(num=>num%2===0);
console.log(evenNumbers);

// Reduce method
const reduce_num=[1,2,3,4,5];
sum_numbers=reduce_num.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(sum_numbers);