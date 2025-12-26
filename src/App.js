import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState('Fetching location...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Lat: ${position.coords.latitude.toFixed(4)} | Lon: ${position.coords.longitude.toFixed(4)}`);
        },
        (err) => {
          setError(`Location unavailable`);
          setLocation(null);
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }

    return () => clearInterval(timerId);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getHandRotation = () => {
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    return {
      sec: seconds * 6,
      min: minutes * 6 + seconds * 0.1,
      hour: (hours % 12) * 30 + minutes * 0.5
    };
  };

  const rotations = getHandRotation();

  return (
    <div className="App">
      <div className="clock-container">
        <div className="analog-clock">
          <div className="clock-face">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="marker" 
                style={{ transform: `rotate(${i * 30}deg) translateY(-140px)` }}
              />
            ))}
            <div 
              className="hand hour-hand" 
              style={{ transform: `rotate(${rotations.hour}deg)` }} 
            />
            <div 
              className="hand minute-hand" 
              style={{ transform: `rotate(${rotations.min}deg)` }} 
            />
            <div 
              className="hand second-hand" 
              style={{ transform: `rotate(${rotations.sec}deg)` }} 
            />
            <div className="center-dot" />
          </div>
        </div>
        
        <div className="clock-info">
          <div className="date-display">
            {formatDate(time)}
          </div>
          <div className="digital-time">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
          </div>
          <div className="location-container">
            <div className="location-display">
              {error ? error : location || 'Locating...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
