import React from 'react';
import './App.css';
import { ProfileProvider } from './components/ProfileProvider';
import NavMenu from './components/NavMenu';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Bio from './navigation/Bio';
import Work from './navigation/Work';
import Contact from './navigation/Contact';
import Skills from './navigation/Skills';

function App() {
  return (
    <div>
      <ProfileProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <NavMenu />
          <div style={{ marginTop: '50px' }}>
            <Route exact path={'/'} render={() => <Redirect to="/bio" />} />
            <Route path={'/bio'} component={Bio} />
            <Route path={'/contact'} component={Contact} />
            <Route path={'/skills'} component={Skills} />
            <Route path={'/work'} component={Work} />
          </div>
        </Router>
      </ProfileProvider>
    </div>
  );
}

export default App;
