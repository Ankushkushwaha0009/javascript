// var a = "Hello" ;
// console.log(a) ;


//alert promp confirm
// let age  = prompt("Enter you age : ") ;
// if(age == null){
//     document.write("Please enter your age ") ;
// }
// else if(age > 50){
//     document.write("your age is greater then 50");
// }
// else{
//     document.write("your age is less then 50") ;
// }


// let response = confirm("are you sure you want to delete") ;
// if(response == true){
//     document.write("user satisfied") ;
// }
// else{
//     document.write("user not satisfied") ;
// }

//typeof --> it will give the type  of the given variable 

// let y = 5.6 ;
// console.log(typeof(y)) ;

// let  k = "ankush" ;
// console.log(typeof(k)) ;

// let  k1 = 783837;
// console.log(typeof(k1)) ;


//conversion  

// let s = 3333 
// console.log(typeof(s));
// let s1 = String(s) ;
// console.log(typeof(s1)) ;

// let s1 = "true" ;
// console.log(typeof(s1));
// let s2 = Boolean(s1) ;
// console.log(typeof(s2)) ;


//string manipulation  

// let s = "Ankush kushwaha" ;
// console.log(s.length) ;
// let gre = ` hi ${s} `;
// console.log(gre);
// console.log(s[4]) ; 

// let str = "Ankush \\ kumar ";
// console.log(str) ;

// let str = " Ankush  \" kumar \" ";
// console.log(str) ;


// for(let i = 0 ; i < s.length ; i++) {
//     console.log(" ");
//     console.log(s[i]);
// }

//function


// function add(a , b) {
//      return (a+b);
// }

// console.log(add(4 ,5 )) ;
// console.log(add(4 , 6)) ;
// console.log(add(4 , 7)) ;


//many calls

//function add(){
//       //console.log(arguments[0]) ;
//       let k = arguments.length ;
//       if(k == 0){
//           console.log(" Please pass the argument in this call ") ;
//       }
//       else{
//           let s = 0 ;
//           for(let i = 0 ; i < arguments.length ; i++) {
//                        s += arguments[i] ;
//           }
//           console.log(s) ;
//       }
// }
// add() ;
// add(10,12) ;
// add(3,4,5,6) ;

//global variable and local variable 

// let res = "Ankush kushwaha" ;
// function print1() {
//      console.log(res);
//      let res1 = 34 ;
//      console.log(res1) ;
// }
// print1();


//Aise bhi function likh sakte hai 

// let fu = function(a , b ,c) {
//       return a+b+c;
// }
// console.log(fu(3,4,3)) ;

//time  5s ke bad function aayega 

// let show  = function (){
//     console.log("hello world");
// }
// setTimeout(show, 5000);


// function(){
//     console.log("hellow world ");
// }

//Anynoumous function memory waste nahi ho 

// setTimeout( function(){
//     console.log("hellow world");
// } , 5000) ;



// let fun1 = function(){
//     console.log("hellow world ");
// }
// setTimeout(fun1() , 5000);




//Immediately invoked functions 

// (function(){
//     let str1 = "ankush kushwaha" ;
//     console.log("hellow world");
//     console.log(str1) ;
// })() ;



// (function(){
//     console.log("hiii")
// })()

(function(){
     console.log("hellow111 wolrd");
})()

// (function(){
//     console.log("hellow12 world")
// })()


// function mul(a){
//     for(let i=1; i<=10; i++){
//         document.write(` a * ${i}  = ${a*i} `);
//         document.write("<br>");
//     }
    
// }
// mul(10);
// document.write("<br>");



// (function(){

//         let msg = "hellow third party";
//         let msg1 = "hellow"

//         function great(){
//             console.log(msg);
//             console.log(msg1);
//         }
        
//         great();

// })();


