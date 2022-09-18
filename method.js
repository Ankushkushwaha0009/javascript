let  p = {
    name : 'Ankush kushwah',
    age  : 22 ,
    roll : 13 ,
    
    fun : function(){     //creating method   (any name : function(){})
        let age  = 10;     
        console.log(age)                        
        return "hellow world"   //returning 
    } ,                         //comma must required 
    
    add : function(a , b){     //creating another method 
        return a+b ;           //returning 
    } ,
    
    mul1 : function(g){
       
       let  k =  function(k) {
            console.log(k);
            console.log("101")
           
       }
       k(12)
       return g*2;
    
    }
};

// console.log(p.fun())            //calling the method
// console.log(p.add(10,10))

//anonymous function  or creating method outside the class

// p.print = function(a1, b1){
//     return a1*b1
// }
// console.log(p.print(10,10));

console.log(p.mul1(10));

