import React from 'react';
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Body from './components/body.jsx';
import './App.css';

function App() {
  return (
<>
      <React.Fragment>
        <NavBar />
        <Body />
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;

