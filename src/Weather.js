import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = 'cfad8fec9b2105fafb1fa9ee18e4c2c7';

export default function Weather({lat,lng}) {
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const address = API_URL +
        'lat=' + lat +
        '&lon' + lng +
        '&units=metric' +
        '&appid=' + API_KEY;
    
        axios.get(address)
            .then((response) => {
                setTemp(response.data.main.temp);
                setSpeed(response.data.wind.speed);
                setDirection(response.data.wind.deg);
                setDescription(response.data.weather[0].description);
            }).catch (error => {
                alert(error);
            });
    }, [])

  return (
    <>
        <h3>Weather on your location</h3>
        <p>{temp} C&#176;</p>
        <p>{speed} m/s {direction}</p>
        <p>{description}</p>
    </>
  )
}
