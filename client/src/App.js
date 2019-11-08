import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Home from './Scenes/Home/Home';
import Main from './Scenes/Main/Main';
import Contact from './Scenes/Contact/Contact';
import Shop from './Scenes/Shop/Shop';
import Terms from './Scenes/Terms/Terms';
import FAQ from './Scenes/FAQ/FAQ';
import Admin from './Scenes/Admin/Admin';
import Careers from './Scenes/Careers/Careers';
import Gallery from './Scenes/Gallery/Gallery';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/main" exact component={Main} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/shop" component={Shop} />
          <Route path="/terms" component={Terms} />
          <Route path="/careers" component={Careers} />
          <Route path="/faq" component={FAQ} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/admin" component={Admin} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;