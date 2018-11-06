import React from "react"

const Form = ({ getWeather, handleChange }) => {
    return (
        <React.Fragment>
            <form className="form-container" onSubmit={ getWeather }>
                <input type="text" name="input" onChange={handleChange} placeholder="City or Zip Code..."></input>
                <button>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Form