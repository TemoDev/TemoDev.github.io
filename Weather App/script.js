// Get html elements
const btnMain = document.querySelector('.mainBtn');
const searchBar = document.querySelector('#searchBar');

const bg = document.querySelector('.bg');

const currTemp = document.querySelector('.currTemp');
const currPlace = document.querySelector('.currPlace');
const weatherDesc = document.querySelector('.weatherDesc');
const weatherCondIcon = document.querySelector('.weatherCond-icon');
const rowTempMain = document.querySelector('.row-data-temp');
const rowTempMax = document.querySelector('.row-temp-max');
const rowTempMin = document.querySelector('.row-temp-min');
const rowTempFeels = document.querySelector('.row-temp-feels');
const rowDataCity = document.querySelector('.row-data-city');

const currentSunRise = document.querySelector('.row-title-sunRise');
const currentSunSet = document.querySelector('.row-title-sunSet');

const currDateMonth = document.querySelector('.currDate-month');
const currWeekDay = document.querySelector('.currDate-day');

const rowHumidity = document.querySelector('.row-humidity');

const rowPressure = document.querySelector('.row-pressure');

// Details
const sunRise = document.querySelector('.row-title-sunRise');


// API Parameters for Openweather
let cityName = 'Tbilisi';
const apiKey = '60bbf5fb6e2789ddd033210d95b1df71';

// Fetched data from openWeather API
let mainTemp;
let weatherDetails;
let weatherIcon;

function customIcons(source, target) {
  switch(source) {
    case '01d':
      target.src = './Icons/sun.svg';
    break;

    case '01n':
      target.src = './Icons/moon.svg';
    break;

    case '02n':
    case '02d':
      target.src = './Icons/few-clouds-d.svg';
    break;

    case '03n':
    case '03d':
      target.src = './Icons/cloud.svg';
    break;

    case '04d':
    case '04n':
      target.src = './Icons/broken-clouds.svg';
    break;

    case '09d':
    case '09n':
      target.src = './Icons/broken-clouds.svg';
    break;

    case '10n':
    case '10d':
      target.src = './Icons/rain-d.svg';
    break;
    
    case '11n':
    case '11d':
      target.src = './Icons/thunderstorm.svg';
    break;

    case '13n':
    case '13d':
      target.src = './Icons/snow.svg';
    break;

    case '50n':
    case '50d':
      target.src = './Icons/mist.svg';
    break;

  }
}

// Pexels api key
const pexelsKey = `563492ad6f91700001000001fe3db27c7c6845d3a85eec010fa8f6c4`;

const weatherApi = async () => {

  // get weather
  const getWeatherApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
  const weatherData = await getWeatherApi.json();

  // return promise -> weather data
  return weatherData;

};

const pexelsApi  = async () => {
  // get background images
  const pexelsApi = await fetch(`https://api.pexels.com/v1/search?query=${cityName}&per_page=1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: pexelsKey
    }
  });
  const pexelsData = await pexelsApi.json();

  // return promise -> pexels data(image)
  return pexelsData;

};

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// click function
btnMain.addEventListener('click', () =>{
  cityName = searchBar.value;

  // Get weather data
  weatherApi()
    .then((data) => { 
      // Grant fetched values to variables
      mainTemp = Math.round(data.main.temp);
      weatherDetails = data.weather[0].main;
      weatherIcon = data.weather[0].icon;

      // get months, weekdays
      let currentUnix = data.dt;
      let currentDt = new Date(currentUnix * 1000);

      let currentDate = currentDt.getDate();
      let currentWeekday = weekDays[currentDt.getDay()];
      let currentMonth = months[currentDt.getMonth()];

      currDateMonth.innerText = currentDate + ' ' + currentMonth;
      currWeekDay.innerText = currentWeekday;

      // get sunrise and sunset times
      let sunRiseUnix = data.sys.sunrise;
      let sunSetUnix = data.sys.sunset;

      let sunRiseDt = new Date(sunRiseUnix * 1000);
      let sunSetDt = new Date(sunSetUnix * 1000);

      currentSunRise.innerText = sunRiseDt.getHours() + ' : ' + sunRiseDt.getMinutes();
      currentSunSet.innerText = sunSetDt.getHours() + ' : ' + sunSetDt.getMinutes();

      // insert values into html

      // Brief infomration on left side 
      currPlace.innerText = data.name;
      currTemp.innerText = mainTemp;
      weatherDesc.innerText = weatherDetails;
      // weatherCondIcon.src = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

      customIcons(weatherIcon, weatherCondIcon);

      // Detailed informtaion on right side
      rowDataCity.innerText = data.name;
      rowTempMain.innerText = mainTemp;
      rowTempMax.innerText = Math.round(data.main.temp_max);
      rowTempMin.innerText = Math.round(data.main.temp_min);
      rowTempFeels.innerText = Math.round(data.main.feels_like);
      rowHumidity.innerText = data.main.humidity + "%";
      rowPressure.innerText = data.main.pressure + "mbar";
    }).catch((error) => {
      alert('Please enter city name correctly.');
    });

    // Get background images
  pexelsApi().then( data => {

      // console.log(data);
      const newImage = data.photos[0].src.landscape;
      document.body.style.backgroundColor = data.avg_color;
      bg.src = newImage;

  })
})
