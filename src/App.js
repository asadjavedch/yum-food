import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HeadlineCard from './components/HeadlineCard';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <HeadlineCard/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
