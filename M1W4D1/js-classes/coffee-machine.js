class CoffeeMachine {
	static order = 0 // Access by CoffeeMachine.order

	#waterLevel = 100 // private property. Access this.#waterLevel
	#coffeeLevel = 50

	// Implement private method #heatWater()
	#heatWater() {
		if (this.#waterLevel >= 50) {
			this.#waterLevel -= 50
			console.log('✅ Coffee Machine: Water is hot!')
			return true
		} else {
			console.error('🚨 Error: Not enough water')
			return false
		}
	}

	// Implement private method #grindBeans()
	#grindBeans() {
		if (this.#coffeeLevel >= 10) {
			this.#waterLevel -= 10
			console.log('✅ Coffee Machine: Beans are grinded!')
			return true
		} else {
			console.error('🚨 Error: Not enough beans')
			return false
		}
	}

	addWater() {
		this.#waterLevel = 100
	}

	addCoffeeBeans() {
		this.#coffeeLevel = 50
	}

	// Implement makeCoffee(customer) method
	makeCoffee(customer) {
		CoffeeMachine.order += 1
		if (this.#heatWater && this.#grindBeans) {
			console.log(
				`☕️ Coffee Machine: Your ${customer}, coffee is ready. Enjoy`
			)
		}
	}
}
const myCoffeeShop = new CoffeeMachine()
myCoffeeShop.makeCoffee('Juan')
myCoffeeShop.makeCoffee('Alice')
myCoffeeShop.addWater()
myCoffeeShop.makeCoffee('Peter')
