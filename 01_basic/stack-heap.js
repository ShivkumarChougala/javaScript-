// stack and heap 

// all stack are primitive  and all heap are non primitive 


// stack

let name = "Shiv"
let anotherName = name
anotherName = "Daddy"

// console.log(anotherName); => Daddy
// console.log(name); => Shiv

// here original does not changes,  only the copy changes 


// heap


let userOne = {
    email:  "daddy@gmail.com",
    upi: "Daddy@ibl"
}

let userTwo = userOne
userTwo.email = "Shiv@gmail.com"

console.log(userTwo.email);

