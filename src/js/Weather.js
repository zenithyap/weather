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
            return { error: true, message: error.message };
        }
    }

    async function getIcon(condition) {
        const icon = await import(`../imgs/${condition}.svg`);
        return icon.default;
    }

    return { getCurrentWeatherData, getIcon }
})()

export default weather;