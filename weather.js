let bcity = document.getElementById("bcity");
let btemp = document.getElementById("btemp");
let bwind_speed = document.getElementById("bwind-speed");
let bhumidity = document.getElementById("bhumidity");

let dcity = document.getElementById("dcity");
let dtemp = document.getElementById("dtemp");
let dwind_speed = document.getElementById("dwind-speed");
let dhumidity = document.getElementById("dhumidity");

let opt1 = {
  method: "GET",
  headers: { "X-Api-Key": "aUkhluZKVspe0EQLkCWlQw==o6x3kRPyG8p3wErC" },
  contentType: "application/json",
};

fetch("https://api.api-ninjas.com/v1/weather?city=bangalore", opt1)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    btemp.textContent = `temp: ${data.temp}°C`;
    bwind_speed.textContent = `Wind: ${data.wind_speed} km/hr`;
    bhumidity.textContent = `humidity: ${data.humidity}%`;
  });

fetch("https://api.api-ninjas.com/v1/weather?city=delhi", opt1)
  .then((res1) => {
    console.log(res1);
    return res1.json();
  })
  .then((data1) => {
    dtemp.textContent = `temp: ${data1.temp}°C`;
    dwind_speed.textContent = `Wind: ${data1.wind_speed} km/hr`;
    dhumidity.textContent = `humidity: ${data1.humidity}%`;
  });

//-------------------------------------------------------------------------
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let wind_speed = document.getElementById("wind-speed");
let humidity = document.getElementById("humidity");
let btn = document.getElementById("btn");
var city1 = "";
btn.addEventListener("click", runw);

function runw(e) {
  e.preventDefault();

  let cname = document.getElementById("cname");

  city1 = cname.value;
  city1 = city1.toUpperCase();

  let opt = {
    method: "GET",
    url: "https://api.api-ninjas.com/v1/weather?city=" + city1,
    headers: { "X-Api-Key": "aUkhluZKVspe0EQLkCWlQw==o6x3kRPyG8p3wErC" },
    contentType: "application/json",
  };

  fetch(opt.url, opt)
    .then((result) => {
      console.log(result);

      if (!result.ok) {
        console.log("hello from !ok");
        let alert = document.getElementById("alert");

        setTimeout(() => {
          city.textContent = `${city1} name is invalid `;
          alert.style.opacity = "1";
        }, 100);

        setTimeout(() => {
          alert.style.opacity = "0";
        }, 4000);

        city.textContent = `Weather in your place `;
        temp.textContent = `Temp : - °C`;
        wind_speed.textContent = `Wind-speed : - km/hr`;
        humidity.textContent = `Humidity : -%`;

        cname.value = "";
      } else return result.json();
    })
    .then((data) => {
      console.log(data);
      displayWeather(data);
      // throw new Error("go fetch ur self")
    })
    .catch((error) => console.log(error));

  displayWeather = (data) => {
    city.textContent = `Place : ${city1} `;
    temp.textContent = `Temp : ${data.temp}°C`;
    wind_speed.textContent = `Wind-speed : ${data.wind_speed} km/hr`;
    humidity.textContent = `Humidity : ${data.humidity}%`;

    cname.value = "";
  };
}