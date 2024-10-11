const email = document.querySelector("#email");
const password = document.querySelector("#password");
const check = document.querySelector("#check");
const user = {
  name: "Vyacheslav",
  email: "buracenkoslavik@gmail.com",
  password: "Vyacheslav0380",
  login(email, password) {
    if (email === this.email && password === this.password) {
      alert(`Вітаю ${this.name}`);
    } else {
      alert("Неправильний пароль або E-mail");
    }
  },
};
const handlerLogin = () => {
  user.login(email.value, password.value);
};
check.addEventListener("click", handlerLogin);
