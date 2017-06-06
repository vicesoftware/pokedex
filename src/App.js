import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import UserDeckView from './userDeck/components/UserDeckView'
import Intro from './userDeck/components/Intro';
import Pokedex from './pokeDeck/components/Pokedex';
import New from './pokeDeck/components/NewPokemon';
import Header from './common/components/Header';
import store from './store'



class App extends Component {

  render() {
    return (
      <Provider store ={store}>
        <div className="view">
          <BrowserRouter>
            <div className="view-wrapper">
              <Header />
              <div className="stage">
                <Route path="/" component={Intro} />
                <Route path="/pokedex" component={Pokedex} />
                <Route path="/deck" component={UserDeckView} />
                <Route exact path="/addnew" component={New} />
                <Route path="/addnew/:deckID" component={New} />
              </div>
            </div>
          </ BrowserRouter>
        </div>
      </ Provider>
    );
  }
}

export default App;
