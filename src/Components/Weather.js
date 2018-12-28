import React from "react"

const Weather = ({ weatherData }) => {
    return weatherData.map((dailyData, i) => {
        return(
            <React.Fragment> 
                <div className="flex-container">
                    <div className="list-group">
                        <div className="list-group-item" key={i}>
                            <div className="weather__info">
                                <div className="weather__value">{dailyData.date}</div>
                                <div className="weather__value">{dailyData.main}</div>
                                <img className="weather__value" src={`http://openweathermap.org/img/w/${dailyData.icon}.png`} />
                                <div className="weather__value">Minimum: {dailyData.minimum}°F</div>
                                <div className="weather__value">Maximum: {dailyData.maximum}°F</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    })
}

export default Weather