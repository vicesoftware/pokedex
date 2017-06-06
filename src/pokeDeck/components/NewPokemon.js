import React from 'react';
import { connect } from 'react-redux';
import PokemonForm from './PokemonForm';
import * as user from '../../actions'

class NewPokemon extends React.Component {

  constructor(props, context){

    super(props, context);

    this.state = {
      pokemon: (Object.assign({}, this.props.pokemon))
    }

    this.setPokemonState = this.setPokemonState.bind(this);
    this.savePokemon = this.savePokemon.bind(this);

  }

  setPokemonState(e){
    // Need some clarification on what is happening here {pluralsight}
    var field = e.target.name;
    var value = e.target.value;
    this.state.pokemon[field] = value;
    return this.setState({pokemon: this.state.pokemon});
  }

  savePokemon(e){
    e.preventDefault();

    // wanted to filter through exsisting deck and replace accordingly per edit
    // but pokemon state overriding access to store??
    this.props.dispatch(user.addToDeck(this.state.pokemon));
  }

  render(){

    return (
        <div className="dex-search">
          <div className="dex-search-view">
            <h1>Pokedex Log</h1>
            <PokemonForm
              pokemon={this.state.pokemon}
              onChange={this.setPokemonState}
              onSave={this.savePokemon}
            />
          </div>
        </div>
    );

  }

}


function mapStateToProps(state, ownProps){

  const pokemonCard = ownProps.match.params.deckID;

  function getCardByDeckId(pokemon, deckID) {
    const currCard = state.user.deck.filter(pokemon => pokemon.deckID === deckID);
    console.log(currCard);
    if(currCard) return currCard[0];
  }

  var pokemon = {
      name: "",
      type: "",
      species: "",
      deckId: "testing",
      id: "testing"
  }

  if (pokemonCard){
    pokemon = getCardByDeckId(state.pokemon, pokemonCard);
  }

  return {
    pokemon: pokemon,
    user: state.user
  };
}

export default connect(mapStateToProps)(NewPokemon);
