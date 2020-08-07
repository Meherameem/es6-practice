const person = {name:"harry potter",age:17,job:"wizard",gfName:"ginny weasely",address:"godric hollow",friend:['ronald weasely','hermoine granger']};

const gfName = person.gfName;
console.log(gfName);

const { job } = person;
console.log(job);

const myFav = ['shaheer sheikh','taylor jakhar perez','theo james','henry cavill','jamie dornan','borun sobti','aham sharma'];
const [mostFav, newOne, ...rest] = myFav;
console.log(mostFav,newOne,rest);

const Favorita = {
    name : 'Shaheer Sheikh',
    address : 'Jammu,Kashmir',
    tvSeries :{
        first : 'Navya',
        mostPopular : 'Kuch Rang Pyar Ke Aise Bhi',
        current : 'Yeh Rishtey Hain Pyaar Ke',
        famous : 'Mahabharat'
    }
}

const {famous} = Favorita.tvSeries;
console.log(famous);