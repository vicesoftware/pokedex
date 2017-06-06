
const INIT_DECK = {
    deckInit: false
};

const initDeckReducer = (state = INIT_DECK, action) => {
  switch (action.type) {
    case "INIT_PUSH_TO_DECK":
      return { ...state, deckInit: action.payload }
      break;
    default: return state

  }
}

export default initDeckReducer;
