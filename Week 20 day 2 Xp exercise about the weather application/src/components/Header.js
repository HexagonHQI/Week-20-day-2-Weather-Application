// src/components/Header.js
import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { WeatherContext } from '../context/WeatherContext';

const Header = ({ switchToFavorites, switchToWeather }) => {
    const { setUnit, unit } = useContext(WeatherContext);
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Weather App
                </Typography>
                <Button color="inherit" onClick={switchToWeather}>Weather</Button>
                <Button color="inherit" onClick={switchToFavorites}>Favorites</Button>
                <Button color="inherit" onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}>
                    {unit === 'metric' ? '°F' : '°C'}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
