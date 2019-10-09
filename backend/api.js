class Weather {
    async getCity(city){
        const weatherRes = await `http://api.weatherstack.com/current?access_key=639e7705ad6fd629209c9c272fb40ae5&query=${city}`
        const weatherData = await weatherRes.json();
    
        return {
            weather: weatherData
        }
    }
}

export default Weather;