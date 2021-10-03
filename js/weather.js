const API_KEY = '39f10bc42a7894d8ccea740ba26bab25';

const onGeoOk = (e) => {
  const lat = e.coords.latitude;
  const lon = e.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const $city = document.querySelector('#weather span:first-child');
      const $weather = document.querySelector('#weather span:last-child');
      $city.innerHTML = data.name;
      $weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}'C`;
    });
};
const onGeoError = () => {
  alert('WHERE ARE YOU!!!!!!');
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
