const shoppingCart = ["Milk","Coffee","Tea","Honey"];

class Cart {
    constructor(array) {
        this.cart = array;
    }

    checkAndAddFront (item) {
        if (!this.cart.includes(item)) {
            this.cart.unshift(item);
            console.log(`You have added ${item} in your cart.`);
            console.log(`Have a look at your cart ${this.cart}`);
        } else {
            console.log(`You already have ${item} in your cart.`);
            console.log(`Have a look at your cart ${this.cart}`);
        }
    }
    checkAndAddBack (item) {
        if (!this.cart.includes(item)) {
            this.cart.push(item);
            console.log(`You have added ${item} in your cart.`);
            console.log(`Have a look at your cart ${this.cart}`);
        } else {
            console.log(`You already have ${item} in your cart.`);
            console.log(`Have a look at your cart ${this.cart}`);
        }
    }
    checkAllergyAndRemove (allergy) {
        this.cart.forEach((value,index) => {
            if (value === allergy ) {
                this.cart.splice(index,1);
                console.log(`You are allergic to ${value}, ${value} is removed form cart, be safe while you are shopping with us`);
                console.log(`Have a look at your cart ${this.cart}`);
            }
        })
    }
    checkAndReplace (find,replace) {
        this.cart.forEach((value,index) => {
            if (value === find ) {
                this.cart [index] = replace;
                console.log(`You have added ${replace} and removed ${find}`);
                console.log(`Have a look at your cart ${this.cart}`);
            }
        })
    }
}

const cart1 = new Cart(["Milk", "Coffee", "Tea", "Honey"]);

cart1.checkAndAddFront("Meat");
// You have added Meat in your cart.
// Have a look at your cart Meat,Milk,Coffee,Tea,Honey

cart1.checkAndAddBack("Sugar");
// You have added Sugar in your cart.
// Have a look at your cart Meat,Milk,Coffee,Tea,Honey,Sugar

cart1.checkAllergyAndRemove("Honey");
// You are allergic to Honey, Honey is removed form cart, be safe while you are shopping with us
// Have a look at your cart Meat,Milk,Coffee,Tea,Sugar

cart1.checkAndReplace("Tea","Green Tea");
// You have added Green Tea and removed Tea
// Have a look at your cart Meat,Milk,Coffee,Green Tea,Sugar
