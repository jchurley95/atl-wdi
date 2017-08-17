import React, { Component } from 'react';
import Navbar from './components/Navbar';
import OurStory from './components/OurStory';
import MenuList from './components/MenuList';
import LocationList from './components/LocationList';
import SplashImage from './components/SplashImage';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <Navbar />
        </header>
        
        <main>
          <section><SplashImage /></section>
          <section className="OurStory"><OurStory /></section>
          <section className="Menu"><MenuList /></section>
          <section className="Locations"><LocationList /></section>
        </main>

        <footer>
          <section className="Contact"><Contact /></section>
        </footer>
      </div>
    );
  }
}

export default App;
