# What's The Weather App
![](https://res.cloudinary.com/dcvgmixhx/image/upload/v1620764353/Portfolio%20-%20Projects/weather-app.png)

![](https://res.cloudinary.com/dcvgmixhx/image/upload/v1620765570/Portfolio%20-%20Projects/Screen_Shot_2021-05-11_at_4.39.05_PM_u5gsok.png)

A one page React app that pulls data from the Open Weather Map public API. 

### Build Staus: Complete

## Code, Style & Framework
 - React
 - Bungee Shade imported from Google Fonts
 - Async/await fetch with zip code form input as query parameter
 - Data pulled form [OpenWeather API](https://openweathermap.org/api)

 ```
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
```
 - Conditional CSS baised on temp
 ```
 const tempStyle = {
        color:""
    }

    const mainTemp = props.data.main.temp
    
    if (mainTemp < 40){
        tempStyle.color = "blue"
    } else if (mainTemp > 90){
        tempStyle.color = "red"
    } else {
        tempStyle.color = "black"
    }
```
