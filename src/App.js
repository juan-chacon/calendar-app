import React from 'react';
import WeeklyCalendar from './Calendar.js';
import Navbar from './Navbar.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <WeeklyCalendar />
      </div>
    </div>
  );
}

export default App;