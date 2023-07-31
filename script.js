var input = document.querySelector("#inputbox");
var cityname = document.querySelector("#cityName");
var tempp = document.querySelector("#tempp");
var humidityy = document.querySelector("#humresult");
var win = document.querySelector("#winresult");
var errorr = document.querySelector(".error");
var image = document.getElementById("imgsrc");

async function getData() {
  var name = input.value;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=1b5f2ecfa29716d10c92028af871fca2&units=Metric`;

  var result = await fetch(url).then((res) => res.json());

  if (result.cod === `404`) {
    errorr.style.display = "block";
  } else {
    errorr.style.display = "none";
  }

  cityname.innerHTML = result.name;
  tempp.innerHTML = Math.round(result.main.temp) + "°c";
  humidityy.innerHTML = Math.round(result.main.humidity) + "%";
  win.innerHTML = Math.round(result.wind.speed) + "KMPH";

  if (result.weather[0].main == "Clouds") {
    image.src = "./Assets/cloudy.png";
  } else if (result.weather[0].main == "Rain") {
    image.src = "./Assets/rainy.png";
  } else if (result.weather[0].main == "Mist") {
    image.src = "./Assets/mist.png";
  } else if (result.weather[0].main == "Clear") {
    image.src == "./Assets/sunny.jfif";
  } else if (result.weather[0].main == "Drizzle") {
    image.src == "./Assets/drizzle.jfif";
  }
}
