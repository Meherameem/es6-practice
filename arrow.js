//regular way
function doubleIt(num){
    return (2*num);
}
let doubled = doubleIt(5);
console.log(doubled);

//shorter way
const doubleItt = function(numm){
    return 2*numm;
}

let doubledd = doubleItt(5);
console.log(doubledd);

//shortest way
const doubleIttt = nummm => nummm*2;
let doubleddd = doubleIttt(5);
console.log(doubleddd);