import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Pages
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Start from './pages/Start'
import Nav from './components/Nav';
//Router
import {Switch, Route, useLocation} from 'react-router-dom';
import ScrollTop from './components/ScrollTop';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/' exact>
          <Start />
        </Route>
        <Route path='/work' exact>
          <Work />
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
