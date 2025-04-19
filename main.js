async function getCurrentWeatherData(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current&key=GPU2AG4LTAD3J9S76K7HJK2JU&contentType=json`);

        if (!response.ok) {
            throw new Error(`HTTP error! status ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

function initialiseEventListeners() {
    const searchLocationForm = document.getElementById("search-location-form");
    const searchLocation = document.getElementById("search-location");

    searchLocationForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const weatherData = await getCurrentWeatherData(searchLocation.value);
        console.log(weatherData);
    });
}

function display() {
    const mainContainer = document.getElementById("main-container");

    // mainContainer.appendChild()
}

initialiseEventListeners();