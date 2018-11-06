import React from "react"


const Form = ({ getWeather, handleChange, input}) => {
    return (
        <form className="form-container" onSubmit={ getWeather }>
                    <h2>{ input }</h2>
            <input type="text" name="input" onChange={handleChange} placeholder="City or Zip Code..."></input>
            <button>Submit</button>
        </form>

    )
}

export default Form