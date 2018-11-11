import React, { Component } from "react"
import "./App.css"
import Header from "./Components/Header"
import Form from "./Components/Form"
import Weather from "./Components/Weather"

class App extends Component {

  state = {
    input: "",
    days: []
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ input: e.target.value })
  }

  getWeather = async (e) => {
    e.preventDefault()
    let zipUrl = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=80bebdcca0b791a791b9d6b812f71e83&zip=${this.state.input},us&units=imperial`
    let cityUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.input},us&mode=json&appid=80bebdcca0b791a791b9d6b812f71e83&units=imperial`
    const res = await fetch(isNaN(this.state.input) ? cityUrl : zipUrl)
    const data = await res.json()

    if(data.list === undefined) {
      alert("Please enter a valid City or Zip Code")
    } else {
    const cleanDays = [
      this.cleanWeatherArray(data.list.slice(0,8)),
      this.cleanWeatherArray(data.list.slice(8,16)),
      this.cleanWeatherArray(data.list.slice(16,24)),
      this.cleanWeatherArray(data.list.slice(24,32)),
      this.cleanWeatherArray(data.list.slice(32,40))
    ]
    const finalData = cleanDays.map(day => {
      return this.findMinMax(day)
    })
    this.setState({days: finalData})
    }
  }

  cleanWeatherArray = (dayArray) => {
    const cleanDay = dayArray.map(weatherData => {
      return {
        dateTime: weatherData.dt_txt,
        minimum: weatherData.main.temp_min,
        maximum: weatherData.main.temp_max,
        main: weatherData.weather[0].main
      }
    })
    console.log(cleanDay)
    return cleanDay
  }

  findMinMax = (dayArray) => {

    let dayMin = dayArray[0].minimum
    let dayMax = dayArray[0].maximum

    dayArray.forEach(weatherData => {
      if(weatherData.minimum < dayMin) {
        dayMin = weatherData.minimum
      }
      if(weatherData.maximum > dayMax) {
        dayMax = weatherData.maximum
      }
    })
    return {
      date: dayArray[0].dateTime.slice(5, 10),
      main: dayArray[0].main,
      minimum: dayMin,
      maximum: dayMax,
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 header-container">
                <Header />
                </div>
                <Weather weatherData={this.state.days} input={this.state.input}/>
                <Form getWeather={this.getWeather} handleChange={this.handleChange} city={this.state.city}/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
