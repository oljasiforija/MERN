const express = require("express");
var faker = require("faker")
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        
    }
}
class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.companyAddress = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()

        }
    }
}
app.get("/users",(req,res)=>{
    res.json(new User());
})
app.get("/companies",(req,res)=>{
    res.json(new Company());
})
app.get("/user/company",(req, res)=>{
    res.json([new User(), new Company()]);
})
app.listen(port, ()=>{console.log("hello from the otter side")})