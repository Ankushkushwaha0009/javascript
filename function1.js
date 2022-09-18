function a(){
    console.log("hello world");
    return function(){
            console.log("return 1 hello world "); 
            
            return function(){
                  console.log("return 12 hellow world ");
            }
          
        }
    
}

let k = a();
console.log(k());





















