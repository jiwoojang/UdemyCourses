var faker = require("faker");

for (var i = 0; i < 10; i ++) {
    console.log("The product " + faker.commerce.productName() + " costs " + faker.commerce.price());
}
