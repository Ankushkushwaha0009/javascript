let x  = Math.random(); // 0 se 1 ke bich mai number generate karega  //0-9 ke bich mai generate karna hai to
console.log(x);


// let x1 = Math.ceil(Math.random()* 10);                     //0-9 ke bich mai generate karna hai to
// console.log(x1);



//genrate a number betwenn any interaval 


// function getrandom(min  , max){
//     let x2  = Math.floor(Math.random() * (max-min)) + min;
//     console.log(x2);
// }
// getrandom(15,25); //15 is included and 25 is excluded
// getrandom(10000 , 33337464);


let rand = function(k){
    let a = Math.floor(Math.random() * k * 100) + 1;
    return a ;
}
console.log(rand(23));
