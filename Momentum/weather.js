const weather = document.querySelector(".js-weather");

const API_KEY = "99f999a858e52d404a9194320d5ca3f5";
const COORDS = 'coords';

function getWeather(lat, lon) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	).then(function(response) {
		return response.json();
	}).then(function(json) {
		console.log(json);

		const temperature = json.main.temp;
		const place = json.name;
		weather.innerText = `${temperature} @ ${place}`;
	});

	console.log("api response data fetch success");
}

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		// latitude: latitude,
		// longitude: longitude
		// 객체의 key 이름과 변수의 이름이 같은 경우 아래처럼 사용할 수 있음
		latitude,
		longitude
	};

	saveCoords(coordsObj);
	console.log("save geo location");
	getWeatehr(latitude, longitude);
}

function handleGeoError() {
	console.log("Can't access geo location");
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);

	if (loadedCoords === null) {
		askForCoords();
	} else {
		const parsedCoords = JSON.parse(loadedCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
}

function init() {
	loadCoords();
}

init();
