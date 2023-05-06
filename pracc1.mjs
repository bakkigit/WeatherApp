const apikey = "361f2c803a1455aba5189912000796ce";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let input = document.querySelector("input");
let btn = document.querySelector("button");


async function checkweather(city) {
  const response = await fetch(apiUrl + city +`&appid=${apikey}`);


  if(!response.ok) {
    document.querySelector("input").value = "Ugyldigt navn";
    document.querySelector("input").style = "color: red"
  }else{
    document.querySelector("input").style = "color: black"
  var data = await response.json();
  let fugtighed = Math.round(data.main.humidity);
  let temperatur = Math.round(data.main.temp);
  let hastighed = Math.round(data.wind.speed);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = temperatur+"°C";
  document.querySelector(".humidity").innerHTML = fugtighed+"%";
  document.querySelector(".wind").innerHTML = hastighed+" km/t";
  
  if(data.weather[0].main == "Clouds"){
    document.querySelector(".weather-icon").src = "/images/clouds.png"
  }

  else if(data.weather[0].main == "Clear"){
    document.querySelector(".weather-icon").src = "/images/clear.png"
  }

  else if(data.weather[0].main == "Rain"){
    document.querySelector(".weather-icon").src = "/images/rain.png"
  }

  else if(data.weather[0].main == "Drizzle"){
    document.querySelector(".weather-icon").src = "/images/drizzle.png"
  }

  else if(data.weather[0].main == "Mist"){
    document.querySelector(".weather-icon").src = "/images/mist.png"
  }

  document.querySelector(".weather").style = "display: block";
  }



}


btn.addEventListener("click",function(){
  checkweather(input.value)
})


