let p = {
    // creating the properties
    'name': "Ankush kushwah" ,
    'age' :  22 ,
    'roll_no' : 13 ,

};

p.address = "chandini chowk"   // making the new variable 
p.age = 10        // modifying the age values 


delete p.address ;   //deleting the properties 

console.log(p.age)
console.log(p.roll_no)
// console.log(p.address)

//to see variable is defined or not

console.log('name' in p);
console.log('address' in p);


for(let key in p){
    console.log( key + " : " + p[key]);   ///dot vala kam nahi karega jaise   - - > p.roll_no
}








