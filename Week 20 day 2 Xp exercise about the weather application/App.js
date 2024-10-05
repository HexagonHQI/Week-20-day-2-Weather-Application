// src/App.js
import React, { useState } from 'react';
import { WeatherProvider } from './context/WeatherContext';
import Header from './components/Header';
import Weather from './components/Weather';
import Favorites from './components/Favorites';

const App = () => {
    const [showFavorites, setShowFavorites] = useState(false);

    return (
        <WeatherProvider>
            <Header 
                switchToWeather={() => setShowFavorites(false)} 
                switchToFavorites={() => setShowFavorites(true)} 
            />
            {showFavorites ? <Favorites switchToWeather={() => setShowFavorites(false)} /> : <Weather />}
        </WeatherProvider>
    );
};

export default App;
