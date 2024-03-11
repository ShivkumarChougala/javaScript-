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
// console.log(myData.greeting()); // hello , Daddy

const ob1 = { 1: "a", 2: "b"}
const ob2 = {2: "c", 3: "d"} 

const ob3 = Object.assign({},ob1,ob2)
// console.log(typeof ob3); // { '1': 'a', '2': 'c', '3': 'd' }
// console.log(Object.keys(ob1)); // [ '1', '2' ]
// console.log(Object.values(ob1)); // [ 'a', 'b' ]


///// object-de-structure

const user = {
    name: "daddy",
    age : 21,
    email : "daddy@google.com"
}

const {name: hesaru} = user
// console.log(name); // daddy

console.log(hesaru); // we got same output this menthod is called de-structor  {name: hesaru} check this 


