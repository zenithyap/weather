const weather = (function () {
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
    
    async function getCurrentTemperature(location) {
        const weatherData = await getCurrentWeatherData(location);
    
        return weatherData.currentConditions.temp;
    }

    return { getCurrentWeatherData, getCurrentTemperature }
})()

export default weather;