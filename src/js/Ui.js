import weather from "./Weather.js";

const ui = (function() {
    function showLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "block";
    }

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function initialiseEventListeners() {
        const searchLocationForm = document.getElementById("search-location-form");
    
        searchLocationForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            display();
        });
    }   
    
    async function display() {
        const errorMessage = document.getElementById("error-message");
        const searchLocation = document.getElementById("search-location");
        const weatherDataContainer = document.getElementById("weather-data-container");
        weatherDataContainer.classList = "weather-data-container";
        weatherDataContainer.textContent = "";

        showLoader();
        const currentWeatherData = await weather.getCurrentWeatherData(searchLocation.value);
        hideLoader();

        if (!currentWeatherData.error) {
            const currentConditions = currentWeatherData.currentConditions;
            const iconSvg = await weather.getIcon(currentWeatherData.currentConditions.icon);

            const resolvedAddress = document.createElement("h3");
            const temperature = document.createElement("h3");
            const conditions = document.createElement("h3");
            const icon = document.createElement("div");
    
            resolvedAddress.textContent = currentWeatherData.resolvedAddress;
            temperature.textContent = currentConditions.temp + "°C";
            conditions.textContent = currentConditions.conditions;
            icon.innerHTML = iconSvg;

            resolvedAddress.className = "resolved-address";
            temperature.className = "temperature";
            conditions.className = "conditions";
            icon.className = "icon";
    
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