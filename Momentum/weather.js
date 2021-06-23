const COORDS = 'coords';

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
		// getWeather() API Call
	}
}

function init() {
	loadCoords();
}

init();
