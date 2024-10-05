// src/components/Weather.js
import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { WeatherContext } from '../context/WeatherContext';

const Weather = () => {
    const { weather, fetchWeather, toggleFavorite, favorites } = useContext(WeatherContext);
    const [city, setCity] = useState('');

    useEffect(() => {
        fetchWeather('Tel Aviv'); // Default location
    }, [fetchWeather]);

    const handleSearch = () => {
        if (city) {
            fetchWeather(city);
        }
    };

    const isFavorite = favorites.includes(weather?.name);

    return (
        <div style={{ padding: '20px' }}>
            <TextField 
                label="Search City" 
                variant="outlined" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
            />
            <Button variant="contained" onClick={handleSearch}>Search</Button>
            {weather && (
                <Card style={{ marginTop: '20px' }}>
                    <CardContent>
                        <Typography variant="h5">{weather.name}</Typography>
                        <Typography variant="body1">Temp: {Math.round(weather.main.temp)}°</Typography>
                        <Typography variant="body1">Weather: {weather.weather[0].description}</Typography>
                        <Button onClick={() => toggleFavorite(weather.name)}>
                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default Weather;
