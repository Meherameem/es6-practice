const ages = [10,12,14,16];
const ages2 = [11,13,15,17];
const ages3 = [2,4,6,8];

//regular method
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

//cleaner method
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const salami = [150,250,400];
highestSalami= Math.max(...salami); // without three dots it will take the whole array and will give an error.with three dots it takes the items only.
console.log(highestSalami);