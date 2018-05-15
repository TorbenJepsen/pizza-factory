class Pizza {
    constructor(toppings) {
        this.toppings = toppings || 'cheese';
    }
    calculateCost() {
        let cost = 10;
        if(this.toppings === 'cheese'){
            return cost;
        }
        else{
            cost += (this.toppings.length * .99 );
            
        }
        return cost;
    }
}

class Order {
    constructor(pizzas) {
        this.pizzas = [{}]
    }
}


const cheesePizza = new Pizza(['sausage', 'pepperoni']);
console.log(cheesePizza);
console.log(cheesePizza.calculateCost());
