import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Weather from './Components/Weather';


class App extends Component {

  state = {
    weatherData: [],
    input: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ input: e.target.value })
  }

  getWeather = async (e) => {
    e.preventDefault()
    console.log(typeof this.state.input)
    let zipUrl = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=80bebdcca0b791a791b9d6b812f71e83&zip=${this.state.input},us&units=imperial`
    let cityUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.input},us&mode=json&appid=80bebdcca0b791a791b9d6b812f71e83&units=imperial`
    const res = await fetch(isNaN(!Number(this.state.input)) ? cityUrl : zipUrl)
    const weather = await res.json()
    this.setState({ weatherData: weather })
    console.log(weather)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form getWeather={this.getWeather} handleChange={this.handleChange}/>
        <Weather />
      </div>
    );
  }
}

export default App;
