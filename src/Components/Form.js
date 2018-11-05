import React from "react"

const Form = ({ getWeather, handleChange, city }) => {
    return (
        <form onSubmit={ getWeather }>
            <input type="text" name="input" onChange={handleChange} placeholder="City or Zip Code..."></input>
            <button>Submit</button>
            <h2>{city}</h2>
        </form>
    )
}

export default Form