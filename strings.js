// let s = "ank\'ush ku\"shw\"ah"
// console.log(s);
// console.log(s.length);

// l
// let y = "The \"Love\" "
// console.log(y);

// console.log();
// let i = " ankush \kushwaha ";  // For backslash  , \t , \n
// console.log(i);


// // y is an object
// // let y = new String("John");
// // console.log(typeof(y))
// // let k = "John";
// // console.log(k == y);

// //objects cannot be comapared  
// let x = new String("John");  // x is an object
// let y = new String("John");

// console.log(x == y); //false


// let z = "this is ankush kuswha" ;

// console.log(z.slice(8,14)); 
// console.log(z.substring(8,14));//same result 

// // substr(start, length)
// console.log(z.substr(1 , 2)); 
// let str = "Apple, Banana, Kiwi";
// console.log(str.slice(-12,-6));

// console.log(str.slice(7)); //it will print after ( 0-7 )


// console.log(str.slice(-12));

//Replacing the word 

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText)

//By default, the replace() method replaces only the first match:
//it is case sensitive 

// let m = "Ankush kushwaha"
// let m1 = m.replace("kushwaha" , "kumar")
// console.log(m1)


//making insensitive 
// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");
// console.log(newText);



//replace all the occurrence in a given string 
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText)

// let m = "Ankush Kushwaha"
// console.log(m.toUpperCase());
// console.log(m.toLowerCase())



//concatenation in a string 

// let a = "Ankush "
// let b = "Kushwaha"
// console.log(a+b)

// c = a.concat(" " , b)
// console.log(c)

//trim in remove the extra whitespaces before and after the string  
 
// let text1 = "   Hello World!      ";
// console.log(text1);
// console.log(text1.trim());

// let text1 = "     Hello World!   ............  ";
// let text2 = text1.trimStart();  //trim.End()
// console.log(text2)

//padding in starting 

// let x = "4"
// console.log(x.padStart(5 , "l"))
// console.log(x.padEnd(3 , "??"))


// The padStart() method is a string method.
// To pad a number, convert the number to a string first.
// See the example below.

// let numb = 5;
// console.log(typeof(numb))
// let text = numb.toString();
// let padded = text.padStart(4,"0");
// console.log(typeof(padded)); // string 
// console.log(padded) // converted into the string  






