# Coffee Machine Exercise

## How the Coffee Machine Works

Our coffee machine has two main resources:
- **Water tank**: Starts with 100 units
- **Coffee beans container**: Starts with 50 units

**Each coffee serving requires:**
- 🚰 **50 units of water** (for heating)
- ☕ **10 units of coffee beans** (for grinding)

The machine processes orders sequentially and tracks the total number of orders served using a static counter.

## Learning Objectives
- Practice **private methods** (`#method`)
- Practice **static properties** (`static property`)
- Understand **encapsulation** concepts

## Starter Code

```javascript
class CoffeeMachine {
    static order = 0; // Access by CoffeeMachine.order

    #waterLevel = 100; // private property. Access this.#waterLevel
    #coffeeLevel = 50;

    // Implement private method #heatWater()

    // Implement private method #grindBeans()

    addWater() {
        this.#waterLevel = 100;
    }

    addCoffeeBeans() {
        this.#coffeeLevel = 50;
    }

    // Implement makeCoffee(customer) method
}
```

## Iterations

### Iteration 1: Implement `#heatWater()` private method
1. Check if `#waterLevel` has enough water (at least 50 units)
2. If successful:
   - Consume 50 units from `#waterLevel`
   - Display message: `console.log('✅ Coffee Machine: Water is hot!');`
   - Return `true`
3. If not enough water:
   - Display error: `console.error('🚨 Error: Not enough water')`
   - Return `false`

### Iteration 2: Implement `#grindBeans()` private method
1. Check if `#coffeeLevel` has enough beans (at least 10 units)
2. If successful:
   - Consume 10 units from `#coffeeLevel`
   - Display message: `console.log('✅ Coffee Machine: Beans are grinded!');`
   - Return `true`
3. If not enough beans:
   - Display error: `console.error('🚨 Error: Not enough beans')`
   - Return `false`

### Iteration 3: Implement `makeCoffee(customer)` public method
1. Increment the static `order` counter (`CoffeeMachine.order++`)
2. Call both private methods: `#heatWater()` and `#grindBeans()`
3. If both methods return `true`:
   - Display success message: `console.log(\`☕️ Coffee Machine: Your ${customer}, coffee is ready. Enjoy\`)`

## Test Your Implementation

```javascript
const myCoffeeShop = new CoffeeMachine();
myCoffeeShop.makeCoffee('Juan');
myCoffeeShop.makeCoffee('Alice');
myCoffeeShop.addWater();
myCoffeeShop.makeCoffee('Peter');
```

## Tasks to Implement

1. **`#heatWater()`** - private method
2. **`#grindBeans()`** - private method  
3. **`makeCoffee(customer)`** - public method

## Questions for Understanding

1. How many orders can you serve before you run out of water and beans?
2. What happens if you try to call `#heatWater()` directly from outside the class?
3. Why are `#heatWater()` and `#grindBeans()` private instead of public?