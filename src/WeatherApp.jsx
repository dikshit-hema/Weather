import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import "./WeatherApp.css"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather:"haze",
    });

    let updateInfo= (newInfo)=>{
        setWeatherInfo(newInfo);
    };


    return(
        <div className="weather">
            <div className="head">
                <h1 style={{color: "#226ba3"}}><i>Find Weather</i></h1>
                <img className="logo" src="https://cdn.jim-nielsen.com/ios/512/weather-2019-02-07.png"></img>
            </div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}