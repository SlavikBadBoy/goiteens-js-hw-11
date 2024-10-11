const checkWeather = document.querySelector("#check_weather");
const weather = {
  temperature: 0,
  humidity: 95,
  windSpeed: 128,
  checkTemparature() {
    if (parseFloat(this.temperature) >= 0) {
      return false;
    } else {
      return true;
    }
  },
};

checkWeather.addEventListener("click", () => {
  weather.temperature = prompt("Введіть температуру");
  weather.checkTemparature();
  if (weather.checkTemparature() === true) {
    alert("Температура нижче 0 градусів Цельсія");
  }
  if (weather.checkTemparature() === false) {
    alert("Температура дорівнює або більше 0 градусів Цельсія");
  }
});
