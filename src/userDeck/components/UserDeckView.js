import React from 'react';
import { connect } from 'react-redux';
import * as user from '../../actions'
import UserDeck from './UserDeck'


class UserDeckView extends React.Component {

  constructor(props, context){
    super(props, context);
    this.deleteFromDeck = this.deleteFromDeck.bind(this);
  }

  deleteFromDeck(deckID) {
    this.props.dispatch(user.deleteFromDeck(deckID));
  }

  render(){
    return (
      <UserDeck />
    );
  }

}

function mapStateToProps(state, ownProps){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(UserDeckView);
