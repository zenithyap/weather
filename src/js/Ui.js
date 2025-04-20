import weather from "./Weather.js";

const ui = (function() {
    function initialiseEventListeners() {
        const searchLocationForm = document.getElementById("search-location-form");
        const searchLocation = document.getElementById("search-location");
    
        searchLocationForm.addEventListener("submit", async (event) => {
            event.preventDefault();
    
            const currentWeatherData = await weather.getCurrentWeatherData(searchLocation.value);
            display(currentWeatherData);
        });
    }   
    
    async function display(currentWeatherData) {
        const errorMessage = document.getElementById("error-message");
        const weatherDataContainer = document.getElementById("weather-data-container");
        weatherDataContainer.textContent = "";

        if (!currentWeatherData.error) {
            const currentConditions = currentWeatherData.currentConditions;
            const iconSvg = await weather.getIcon(currentWeatherData.currentConditions.icon);

            const resolvedAddress = document.createElement("h3");
            const temperature = document.createElement("h1");
            const conditions = document.createElement("h3");
            const icon = document.createElement("div");
    
            resolvedAddress.textContent = currentWeatherData.resolvedAddress;
            temperature.textContent = currentConditions.temp;
            conditions.textContent = currentConditions.conditions;
            icon.innerHTML = iconSvg;
    
            weatherDataContainer.appendChild(resolvedAddress);
            weatherDataContainer.appendChild(temperature);
            weatherDataContainer.appendChild(conditions);
            weatherDataContainer.appendChild(icon);

            errorMessage.textContent = "";
        } else {
            errorMessage.textContent = "Cannot find country";
        }

    }

    return { initialiseEventListeners, display }
})();

export default ui;