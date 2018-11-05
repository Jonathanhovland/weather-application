import React from "react"

const Weather = ({ date }) => {
    return (
        <div className="container">
            <div className="day">
                <h3>date</h3>
                <p onChange={date}></p>
                <h3>max</h3>
                <h3>min</h3>
            </div> 
       </div> 
    )
}

export default Weather