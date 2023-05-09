// const person={
//     firstname:"vijay",
//     // get lang(){
//     //     return this.firstname;
//     // }//get object property
//     //set

//    get fullnmae(){
//         return this.firstname;
//     }

//     }

// person.lang="en";
// console.log(person.lang)
// document.getElementById("demo").innerText=person.fullnmae;

/*
constructor
*/
function Person(firstname,lastname,age){
    this.Name=firstname;
    this.Lname=lastname;
    this.Page=age;
    
}


// const myobj=new Person("vjay","sag",40);
// myobj.L="sur"
//prototype allow add proprty and allow add method

Person.prototype.nickname=function(){
   return this.Lname+this.Page
}
Person.prototype.nation="indai";

const myobj=new Person("vjay","sag",40);
console.log(myobj.nickname)
//adding to the above
// myobj.name=function(){
//     return this.Name+this.Page;
// }
console.log(myobj.nickname());
/*
----------------------------------

*/

// for of 
const a=[2,4,5];
for(const x of a){
    console.log(x);
}

/*

*/