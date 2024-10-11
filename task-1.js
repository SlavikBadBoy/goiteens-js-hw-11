const depositButton = document.querySelector("#deposit-button");
const withdrawButton = document.querySelector("#withdraw-button");

const bankAccount = {
  ownerName: "Vyacheslav",
  accountNumber: 380970869082,
  balance: 150,

  deposit(amount) {
    this.balance += amount;
    alert(`Ви поповнили суму. Баланс: ${this.balance}`);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      alert("Сума зняття коштів перевищує ніж ваш баланс");
    } else {
      this.balance -= amount;
      alert(`Ви зняли кошти. Баланс: ${this.balance}`);
    }
  },
};
depositButton.addEventListener("click", () => {
  const amount = Number.parseFloat(prompt("Ведіть суму для депозиту"));
  bankAccount.deposit(amount);
});
withdrawButton.addEventListener("click", () => {
  const amount = Number.parseFloat(prompt("Ведіть суму для зняття коштів"));
  bankAccount.withdraw(amount);
});
