import weather from "./Weather.js";

const ui = (function() {
    function initialiseEventListeners() {
        const searchLocationForm = document.getElementById("search-location-form");
        const searchLocation = document.getElementById("search-location");
    
        searchLocationForm.addEventListener("submit", async (event) => {
            event.preventDefault();
    
            const currentWeatherData = await weather.getCurrentWeatherData(searchLocation.value);
            const iconSvg = await weather.getIcon(currentWeatherData.currentConditions.icon);
            display(currentWeatherData, iconSvg);
            console.log(currentWeatherData);
        });
    }   
    
    function display(currentWeatherData, iconSvg) {
        const currentConditions = currentWeatherData.currentConditions;

        const weatherDataContainer = document.getElementById("weather-data-container");
        const resolvedAddress = document.createElement("h3");
        const temperature = document.createElement("h1");
        const conditions = document.createElement("h3");
        const icon = document.createElement("img");

        resolvedAddress.textContent = currentWeatherData.resolvedAddress;
        temperature.textContent = currentConditions.temp;
        conditions.textContent = currentConditions.conditions;
        icon.src = iconSvg;

        weatherDataContainer.textContent = "";
        weatherDataContainer.appendChild(resolvedAddress);
        weatherDataContainer.appendChild(temperature);
        weatherDataContainer.appendChild(conditions);
        weatherDataContainer.appendChild(icon);
    }

    return { initialiseEventListeners, display }
})();

export default ui;