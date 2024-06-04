let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
       },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//a
const name = { Name : "Fariq Maasir"}
const email = { Email : "mfariqmaasir@gmail.com"}
const hobby = { Hobbies :"Reading Book, Watching Coach Justin, listening to Coki preaching"}
let bio  = {...name,...email,...hobby}
console.log(bio)

//b
const {street,city} = data.address
console.log(street,city)