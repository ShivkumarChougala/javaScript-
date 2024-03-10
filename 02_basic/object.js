const mySym = Symbol("key1")

const myData = {
    name: "Daddy",
    age: 21,
    email:"daddy@gmail.com",
    isLoggedIn : false,
    [mySym]: "key1"
}


// console.log(myData.email);
// console.log(myData["email"]);

// lets add sym in our obj
// console.log(myData[mySym]); // key1 print not as string but as a symbol coz [this]

myData.email = "daddy@23gmail.com"
// Object.freeze(myData) // cant change
myData.email = "day@23gmail.com"

// console.log(myData);

myData.greeting = function(){
    console.log(`hello , ${this.name}`);
}
console.log(myData.greeting()); // hello , Daddy
