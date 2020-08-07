//if there is any undefined value of any parameter present in function
//oldest method
function add(num1,num2){
    if (num2 == undefined){
        num2 = 0;
    }
    sum = num1 + num2;
    return sum;
}
let total = add(15);
console.log(total);

//better one method
function add(num1,num2){
    num2 = num2 || 0;
    sum = num1 + num2;
    return sum;
}
total = add(15);
console.log(total);

//es6 method
function add(num1,num2 = 0){
    sum = num1 + num2;
    return sum;
}
total = add(15);
console.log(total);