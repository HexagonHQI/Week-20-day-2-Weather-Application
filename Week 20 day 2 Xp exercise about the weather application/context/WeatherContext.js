// src/context/WeatherContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'

    const fetchWeather = async (city) => {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`);
            setWeather(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const toggleFavorite = (city) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(city)) {
                return prevFavorites.filter(fav => fav !== city);
            } else {
                return [...prevFavorites, city];
            }
        });
    };

    return (
        <WeatherContext.Provider value={{ weather, favorites, fetchWeather, toggleFavorite, unit, setUnit }}>
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherContext, WeatherProvider };
