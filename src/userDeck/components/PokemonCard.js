import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as user from '../../actions'

class PokemonCard extends React.Component {

  constructor(props){ super(props) }

  render(){

    return (

      <div className="usr-deck-pokemon" key={this.props.deckID} id={this.props.deckID}>

        <div className="usr-deck-header">
          <img />
        </div>

        <div className="pokemon-stats">
          <h3>{this.props.name}</h3>
          {/* <h3>{this.props.type}</h3> */}
        </div>


        <div className="deck-actions">
          {/* Bug - still trying to work out returning the edited pokemon per the deckID */}
          <div><NavLink to={"/addnew/" + this.props.deckID}>Edit</NavLink></div>
          <div onClick={() => {this.props.deleteCard(this.props.deckID)}}>Delete</div>
        </div>

        <h4 className="deck-desc">{this.props.species}</h4>

      </div>

    )

  }

}

// deprecated??
PokemonCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  deckID: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  type: React.PropTypes.string
}

export default PokemonCard;
