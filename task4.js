const id = {id : 1}
const name = {name: "Fariq Maasir"}
const username = {username: "Maasir"}
const email = {email: "mfariqmaasir@gmail.com"}
const address = { 
    address : {
    street : "Tirta raya",
    block : "F313",
    city : "Bekasi city",
    zipcode : "17423" 
}
}
const phone = {phone: "+62-895-3459-60209"}
const website = {website: "fariqmaasir.github.io"}

let data  = {...name,...username,...email,...address,...phone,...website,}
console.log(data)

const {address : {street,city}} = address
console.log(street,city)