// let x =  "2021-01-25";
// let x1 = "Jan-25-2021";
// console.log(x1);

// let x = new Date();
// console.log(x);

//(year , month , date , hour , min , sec , mill);
// let x = new Date(2000 , 12 , 10  , 12 , 12 , 120 , 1900);  
// console.log(x);


let d = new Date("  13 october , 2018 ,  11:12:13 "); 
console.log(d); // 

// Method 
console.log(d.getTime());  // Milliseconds Mai Store ho raha hai 


// console.log(d.getFullYear());
// console.log(d.getMonth());

// console.log(d.getDate());

//  console.log(d.getMinutes());

// console.log(d.getHours());

// console.log(d.getSeconds());

// d.setFullYear(2020);
// d.setMonth(2);
// d.setDate(21);

//similarily for hour and minute we can do this 

//console.log(d) ;


let x = new Date("october 19 , 2018  11:12:13"); 

let y = new Date("october 19 , 2018  11:12:13"); 

// //after this 19 date which day will occur just tell, me

y.setDate(x.getDate() + 50);

console.log(x);
console.log(y);


// let x = new Date("october 19 , 2022  11:12:13"); 

// let y = new Date();  //todays date it will give 

// //compring the date  
// if( y > x){
//   console.log(" x is past  date ");
// }
// else if(x == y){
//     console.log(" x is same date ");
// }
// else{
//     console.log(" x  is future date  ");
// }



