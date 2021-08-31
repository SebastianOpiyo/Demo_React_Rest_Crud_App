import React from 'react';
import TitleBar from './Titlebar';
import Joke from './jokes';
import Categories from './jokescategories';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Pages = () => {
    return(
        <Router>
            <Route exact path="/" component= {TitleBar} />
            <Route exact path="/" component= {Categories} />
            <Route exact path="/categories/:category" component= {Joke} />
            <Route path = "/joke" component = {Joke} />
        </Router>
    );
};
export default Pages;