import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="home-page">
      {/* Prvi del: Glavni Navbar */}
      <div className="home-page__section">
        <div className="home-page__title">
          <h2>Home Page</h2>
        </div>
        <div className="home-page__description">
          <p>Hello</p>
        </div>
      </div>

      {/* Drugi del: Dodatni vsebinski Navbar */}
      <div className="home-page__section">
        <div className="home-page__content">
          <div className="home-page__content__left">
            <div className="home-page__content__left__title">
              <h2>Left Title</h2>
            </div>
            <div className="home-page__content__left__description">
              <p>This is the left side description.</p>
            </div>
          </div>
          <div className="home-page__content__right">
            {/* Prostor za animirano sliko */}
            <p>Animated Image will go here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

        </header>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;