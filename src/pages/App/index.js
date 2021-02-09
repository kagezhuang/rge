import React from 'react'
import './style.scss';
// router
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import pages or components
import Navbar from '../../components/layout/Navbar'
import Home from '../../pages/Home'
import Explore from '../../pages/Explore'
import Learn from '../../pages/Learn'
import Capture from '../../pages/Capture'
import TextButton from '../../ui/buttons/TextButton'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={ Home } />
        <Route path='/explore' component={ Explore } />
        <Route path='/learn' component={ Learn } />
        <Route path='/capture' component={ Capture } />
      </div>
    </BrowserRouter>
  );
}

export default App;
