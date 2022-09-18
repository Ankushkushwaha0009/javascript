const cla = {
     name    : 'Ankush',
     age     : '21' ,
     roll_No : 13,
     k  : function() {
        //console.log ("hello world");
        return function k1(){
              return "hi babes";
        }
     },


}
console.log(cla.name);
let p = cla.k();
console.log(cla.k());
console.log(p());

// console.log(cla.k());                        //calling the method in a class 


// console.log(cla['name']);
// console.log(cla['age']);














