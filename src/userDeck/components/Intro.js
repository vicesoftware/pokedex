import React from 'react';
import { connect } from 'react-redux';
import NewPokemon from '../../common/components/CreatePoke'
import * as user from '../../actions'
import { Redirect } from 'react-router'


class Intro extends React.Component {

  constructor(props){
    super(props);
    this.userDeckInit = this.userDeckInit.bind(this);
  }

  userDeckInit(name, type){
    var deckInit =  new NewPokemon(name, type);
    this.props.dispatch(user.addToDeck(deckInit));
    this.props.dispatch(user.initDeck(true));
  }

  render(){

    if (this.props.initDeck.deckInit) {
      return <Redirect push to="/deck" />;
    }

    return (
      <div className="intro">
        <div className="intro-mod">

          <h2>Pick Your First Pokemon</h2>
          <div className="intro-choice">
            {/* Future - Replace with mapped components */}
            <div onClick={
              () => this.userDeckInit("charmander", "fire")
            }>Charmander</div>
            <div onClick={
              () => this.userDeckInit("bulbasaur", "plant")
            }>Bulbasaur</div>
            <div onClick={
              () => this.userDeckInit("squirtle", "water")
            }>Squirtle</div>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps){
  return {
    user: state.user,
    initDeck: state.initDeck
  };
}

export default connect(mapStateToProps)(Intro);
