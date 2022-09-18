let person = {
    firstName :'Ankush' , 
    lastName : 'Kushwaha' ,

    sayHello : function(){
        console.log("Hello ! i have a " + car.brand + " car" );    // outside the class 
 
        console.log("Hello my name is " + this.firstName +   " " + this.lastName + " "  );  // in the same class
        
        this.hi() ;
    } ,

    hi :  function(){
         console.log("I love my india ");   
         car.hi()
    } 
};

let car = {
    brand : 'Tata'  ,
    model : 'safari' ,
   
    hi:function(){
        console.log("hi Ankush11 kushwaha11")
        //person.sayHello();  it will goto infinite 
    }
}

person.sayHello();



