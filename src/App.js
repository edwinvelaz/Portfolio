import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Nav from './components/Nav';
//Router
import {Switch, Route, useLocation} from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/skills' exact>
          <Skills />
        </Route>
        <Route path='/contact' exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
