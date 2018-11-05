import React from "react"

const Weather = ({ weatherData, input }) => {
    return weatherData.map((dailyData, i) => {
        return(
            <div className="container">
            <h1>{ input }</h1>
            <div className="list-group">
                <div className="list-group-item" key={i}>
                <div className="row">
                    <div className="col-md-4">{dailyData.date}</div>
                    <div className="col-md-4">Minimum: {dailyData.minimum}°</div>
                    <div className="col-md-4">Maximum: {dailyData.maximum}°</div>
                </div>
                </div>
            </div>
        </div>
        )
    })
}

export default Weather