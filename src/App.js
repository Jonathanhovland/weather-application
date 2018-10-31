import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Weather from './Components/Weather';


class App extends Component {

  state = {
    weatherData: []
  }

  async getWeather(e) {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const res = await fetch(`api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&appid=80bebdcca0b791a791b9d6b812f71e83`)
    const weather = await res.json()
    // this.setState({ weatherData: weather })
    console.log(weather)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
