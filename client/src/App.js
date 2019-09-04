import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Home from './Scenes/Home/Home';
import Main from './Scenes/Main/Main';
import Contact from './Scenes/Contact/Contact';
import Shop from './Scenes/Shop/Shop';
import ContactBox from './components/ContactBox/ContactBox';
import Terms from './Scenes/Terms/Terms';
import FAQ from './Scenes/FAQ/FAQ';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Menu /> */}
        <ContactBox />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/main" exact component={Main} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/shop" component={Shop} />
          <Route path="/terms" component={Terms} />
          <Route path="/faq" component={FAQ} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;