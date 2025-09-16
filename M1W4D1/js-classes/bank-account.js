class BankAccount {
  #balance = 0; // remember to initiate it in 0 to cast as number
  
  constructor(name) {
    this.fullName = name;
  }

  #validateAmount(amount) {
    return amount > 0;
  }

  deposit(amount) {
    if (this.#validateAmount(amount)) {
      this.#balance += amount;
    }
  }

  displayBalance() {
    console.log(`Your balance is €${this.#balance}`);
  }
}

const clientAccount = new BankAccount('Alice');
// clientAccount.deposit(-1500);
clientAccount.displayBalance();