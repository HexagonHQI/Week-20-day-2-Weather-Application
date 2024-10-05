// src/components/Favorites.js
import React, { useContext } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { WeatherContext } from '../context/WeatherContext';

const Favorites = ({ switchToWeather }) => {
    const { favorites, fetchWeather } = useContext(WeatherContext);

    return (
        <div style={{ padding: '20px' }}>
            <List>
                {favorites.map((city) => (
                    <ListItem button key={city} onClick={() => { fetchWeather(city); switchToWeather(); }}>
                        <ListItemText primary={city} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Favorites;
