import React from 'react';
import './App.css';
import { ProfileProvider } from './components/ProfileProvider';
import NavMenu from './components/NavMenu';
import { HashRouter as Router, Route } from 'react-router-dom';
import Bio from './navigation/Bio';
import Contact from './navigation/Contact';
import Skills from './navigation/Skills';

function App() {
  return (
    <div>
      <ProfileProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <NavMenu />
          <div style={{ marginTop: '50px' }}>
            <Route path={'/bio'} component={Bio} />
            <Route path={'/contact'} component={Contact} />
            <Route path={'/skills'} component={Skills} />
          </div>
        </Router>
      </ProfileProvider>
    </div>
  );
}

export default App;
