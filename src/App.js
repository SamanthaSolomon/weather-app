import React, {useState} from "react"
import './App.css'
import Weather from "./Components/Weather"
import Form from "./Components/Form"

function App() {
  
  const apiKey = "46d486266c2e75779a05e56e513ceb17"

  const [zip, setZip] = useState(null)

  const getWeather = async (zipCode) => {
    const response = await fetch (
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`
    )
    const data = await response.json();
      setZip(data)
  }
  
  return (
    <div className="App">
      <h1>Hey!<br></br> What's the weather <br></br> like outside?</h1>
      <Form weathersearch={getWeather}/>
      {zip ? <Weather data={zip}/> : ""}
    </div>
  );
}

export default App;
