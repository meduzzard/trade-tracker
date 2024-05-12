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
          <Link to="/account">Account</Link>
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
      <div className='home-page__section'>
        <div className='home-page__section__middle'>
          <div className='home-page__title'>
            <div className='home-page__title__middle'>
              <h1>TradeTracker</h1>
            </div>
            <div className='home-page__title__description'>
              <div className='home-page__title__description__middle'>
                <p>Trade Tracker is a comprehensive website and browser extension designed for tracking your trading positions from TradingView using the REST API. With Trade Tracker, users can easily input their trading positions and save them to their profile. The website then displays all user trades, providing valuable insights into trading performance and portfolio management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-page__section'>
        <div className='home-page__section__left'>
          <div className='home-page__title'>
            <div className='home-page__title__left'>
              <h1>Usecase</h1>
            </div>
            <div className='home-page__title__description'>
              <div className='home-page__title__description__left'>
                <p>Trade Tracker is a comprehensive website and browser extension designed for tracking your trading positions from TradingView using the REST API. With Trade Tracker, users can easily input their trading positions and save them to their profile. The website then displays all user trades, providing valuable insights into trading performance and portfolio management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-page__section'>
        <div className='home-page__section__left'>
          <div className='home-page__title'>
            <div className='home-page__title__left'>
              <h1>Usecase</h1>
            </div>
            <div className='home-page__title__description'>
              <div className='home-page__title__description__left'>
                <p>Trade Tracker is a comprehensive website and browser extension designed for tracking your trading positions from TradingView using the REST API. With Trade Tracker, users can easily input their trading positions and save them to their profile. The website then displays all user trades, providing valuable insights into trading performance and portfolio management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-page__section'>
        <div className='home-page__section__left'>
          <div className='home-page__title'>
            <div className='home-page__title__left'>
              <h1>Usecase</h1>
            </div>
            <div className='home-page__title__description'>
              <div className='home-page__title__description__left'>
                <p>Trade Tracker is a comprehensive website and browser extension designed for tracking your trading positions from TradingView using the REST API. With Trade Tracker, users can easily input their trading positions and save them to their profile. The website then displays all user trades, providing valuable insights into trading performance and portfolio management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Account() {
  return (
    <div className='account-page'>
      <div className='account-page__section'>
        <div className='account-page__section__left'>
          <div className='account-page__title'>
            <div className='account-page__title__left'>
              <h1>Account</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;