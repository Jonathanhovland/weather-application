import React from "react"

const Weather = ({ weatherData, input }) => {
    return weatherData.map((dailyData, i) => {
        return(
            <div className="flex-container">
            {/* <h1>{ input }</h1> */}
            <div className="list-group">
                <div className="list-group-item" key={i}>
                <div className="weather__info">
                    <div className="weather__value">{dailyData.date}</div>
                    <div className="weather__value">Minimum: {dailyData.minimum}°</div>
                    <div className="weather__value">Maximum: {dailyData.maximum}°</div>
                </div>
                </div>
            </div>
        </div>
        )
    })
}

export default Weather