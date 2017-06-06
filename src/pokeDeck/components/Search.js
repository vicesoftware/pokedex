import React from 'react';
import { connect } from 'react-redux';
import 'es6-promise';
import 'isomorphic-fetch';
import NewPokemon from '../../common/components/CreatePoke'
import * as user from '../../actions'


var pokeSearchName;

class Search extends React.Component {

  constructor(props){
    super(props);
    this.pokeFetch = this.pokeFetch.bind(this);
  }

  pokeFetch(usrSearch) {

    const usrPokeSearch = "http://pokeapi.co/api/v2/pokemon-species/" + usrSearch + "/";

    // more effecent way of creating thunk???
    this.props.dispatch((dispatch) => {

      fetch(usrPokeSearch)
        .then( dispatch(user.loaderUp(true)) )
        .then((response) => response.json())
        .then(function(data) {
          var newPokemon = new NewPokemon(data.name, data.type, data.flavor_text_entries[1].flavor_text, data.id);
          dispatch(user.searchReturn(newPokemon));
          dispatch(user.loaderUp(false));
        })
        .catch((err) => {
          alert("whoops. maybe you spelled it wrong?")
        });

    })

  }

  pokeSearch(e){
    // more effecient way of storing input val outside of state??
    pokeSearchName = (e.target.value);
  }

  onPokeSearch(){
    this.pokeFetch(pokeSearchName);
  }

  render(){

    return (
        <div className="dex-search">
          <div className="dex-search-btn" onClick={this.onPokeSearch.bind(this)}>pokeball</div>
          <input className="dex-searchbar" onChange={this.pokeSearch} type="text" placeholder="Type Pokemon Name to Search"/>
        </div>
    );

  }

}

function mapStateToProps(state, ownProps){
  return {
    glossary: state.glossary
  };
}

export default connect(mapStateToProps)(Search);
