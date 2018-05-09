import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import Tracks from '../tracks';
import Geners from '../geners';

const App = () => (
  <div>
    <header className="headerMenu">
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/tracks">Tracks</Link></li> 
        <li><Link to="/geners">Geners</Link></li> 
      </ul>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/tracks" component={Tracks} />
      <Route exact path="/geners" component={Geners} />
    </main>
  </div>
);

export default App;
