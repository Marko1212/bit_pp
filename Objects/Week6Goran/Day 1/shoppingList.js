'use strict';
(function () {
    console.log("Hi");

    function Product(name, price, exp) {
        this.id = (Math.floor(10 * Math.random())).toString() + (Math.floor(10 * Math.random())).toString() + (Math.floor(10 * Math.random())).toString() + (Math.floor(10 * Math.random())).toString() + (Math.floor(10 * Math.random())).toString();
        this.name = name;
        this.price = price;
        this.exp = new Date(exp);
    }
    Product.prototype.getInfo = function () {
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase() + this.id + ", " + this.name + ", " + this.price.toFixed(2);
    };


    function ShoppingBag() {
        this.listOfProducts = [];
    };
    ShoppingBag.prototype.addProduct = function (p) {
        if (p.exp > new Date()) {
            this.listOfProducts.push(p)
        } else {
            console.log("Product expired")
        };
    };
    ShoppingBag.prototype.avgPrice = function () {
        var result = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            result += this.listOfProducts[i].price;
        }
        return (result / this.listOfProducts.length).toFixed(3);
    };
    ShoppingBag.prototype.getMostExpensive = function () {
        var valueOFExpensive = this.listOfProducts[0].price;
        var indexOFExpensive = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            if (valueOFExpensive < this.listOfProducts[i].price) {
                valueOFExpensive = this.listOfProducts[i].price;
                indexOFExpensive = i;
            }
        }
        return this.listOfProducts[indexOFExpensive].getInfo();
    };
    ShoppingBag.prototype.totalPrice = function () {
        var totalPriceOfAll = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            totalPriceOfAll += this.listOfProducts[i].price;
        }
        return totalPriceOfAll;

    };



    function PaymentCard(ballance, status, valid) {
        this.ballance = ballance.toFixed(2);
        this.status = status;
        this.valid = new Date(valid);
    };

    function checkoutAndBuy(shoppingBag, paymentCard) {
        console.log("You have:", paymentCard.ballance);


        // Check status and valid until date of a payment card

        if ((paymentCard.status !== "active") || (paymentCard.valid < new Date())) {
            return console.log("Your card is not valid");

            // Check if you have enough money     
        } else if (shoppingBag.totalPrice() > paymentCard.ballance) {
            var difference = shoppingBag.totalPrice() - paymentCard.ballance;
            return console.log("You are missing " + difference);
        }
        else {
            console.log("After buy you have: ", paymentCard.ballance - shoppingBag.totalPrice());
            return console.log("Successful transaction!")
        };

    };

    var product1 = new Product("Bananas", 125, "11.11.2020");
    var product2 = new Product("Oranges", 100.5555, "5.11.2020");
    var product3 = new Product("Grapes", 115.6754, "1.1.2020");
    var product4 = new Product("Apples", 145, "7.10.2020");
    var product5 = new Product("Plums", 155.150, "12.10.2017");

    var a = new Date();

    var bag1 = new ShoppingBag();

    bag1.addProduct(product1);
    bag1.addProduct(product2);
    bag1.addProduct(product3);
    bag1.addProduct(product4);
    bag1.addProduct(product5);

    var card1 = new PaymentCard(2000, "active", "05.05.2022");
    var card2 = new PaymentCard(200, "active", "05.05.2022");

    checkoutAndBuy(bag1, card1);
    // checkoutAndBuy(bag1, card2);
})()