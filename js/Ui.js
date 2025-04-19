import weather from "./Weather.js";

const ui = (function() {
    function initialiseEventListeners() {
        const searchLocationForm = document.getElementById("search-location-form");
        const searchLocation = document.getElementById("search-location");
    
        searchLocationForm.addEventListener("submit", async (event) => {
            event.preventDefault();
    
            const weatherData = await weather.getCurrentWeatherData(searchLocation.value);
            console.log(weatherData);
        });
    }
    
    function display() {
        const mainContainer = document.getElementById("main-container");
    
        // mainContainer.appendChild()
    }

    return { initialiseEventListeners, display }
})();

export default ui;