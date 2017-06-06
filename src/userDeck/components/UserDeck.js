import React from 'react';
import { connect } from 'react-redux';
import * as user from '../../actions'
import PokemonCard from './PokemonCard'

class UserDeck extends React.Component {

    constructor(props, context){
      super(props, context);
      this.deleteCard = this.deleteCard.bind(this);
    }

    deleteCard(deckID){
      this.props.dispatch(user.deleteFromDeck(deckID))
    }

    render(){

    var usrDeck = this.props.user.deck;
    const userDeck = usrDeck.map(
      ( pokemon, index ) => {
        return (

          <PokemonCard
            name={pokemon.name}
            type={pokemon.type}
            key={index}
            species={pokemon.species}
            deckID={pokemon.deckID}
            deleteCard={this.deleteCard}
          />

        )});

      return (

        <div className="usr-deck">

          <div className="usr-deck-view">

            <div className="deck-wrapper">

              <div className="deck-sensors">
                <div className="main-lght lrg"></div>

                <span>
                  <div className="main-lght green"></div>
                  <div className="main-lght grey"></div>
                </span>

              </div>

              <div className="deck-main-view">

                {userDeck}

              </div>

              <div className="deck-controller-view">
                <div className="btn-group">

                  <span>
                    <div className="blue-btn"></div>
                    <div className="blue-btn"></div>
                    <div className="red-rnd-btn"></div>
                  </span>

                  <div className="lng-grey-btn"></div>
                  <div className="min-grey-btn"></div>

                </div>
                <div className="controller"></div>
              </div>

            </div>

          </div>

        </div>

      );

  }

}


function mapStateToProps(state, ownProps){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(UserDeck);
