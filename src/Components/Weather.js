import React from "react"

const Weather = (props) => {
    
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

    
    
    return(
        <div>
            <h2>{props.data.name}</h2>
            <h3 style={tempStyle}>Current Temp: {props.data.main.temp} F</h3>
            <h4>{props.data.weather[0].description}</h4>
            <p>Today's Low: {props.data.main.temp_min} F</p>
            <p>Today's High: {props.data.main.temp_max} F</p>
        </div>
    )
}

export default Weather