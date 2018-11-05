import React from "react"


const Form = ({ getWeather, handleChange }) => {
    return (
        <form onSubmit={ getWeather }>
            <input type="text" name="input" onChange={handleChange} placeholder="City or Zip Code..."></input>
            <button>Submit</button>
        </form>
    )
}

export default Form