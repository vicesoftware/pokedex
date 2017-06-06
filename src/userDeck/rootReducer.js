
const DEF_USER_STATE = {
    name: "",
    deck: []
};

const userReducer = (state = DEF_USER_STATE, action) => {
  switch (action.type) {
    case "USERDECK_ADD_POKEMON":
      return {
        ...state,
        deck: [...state.deck, action.payload]
      }
      break;
    case "USERDECK_DELETE_POKEMON":
      return {
        ...state,
        deck: [ ...state.deck.filter(pokemon => pokemon.deckID !== action.payload) ]
      }
      break;

    default: return state

  }
}

export default userReducer;
