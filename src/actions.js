// put this file in the root becuase the application is fairly small
// and the action emitters can be functionally relevant to both
// the userDeck and pokeDeck

export function addToDeck(newPokemon){
  return {
        type: "USERDECK_ADD_POKEMON",
        payload: newPokemon
  }
}

export function deleteFromDeck(deckID){
  return {
        type: "USERDECK_DELETE_POKEMON",
        payload: deckID
  }
}

export function initDeck(bol){
  return {
        type: "INIT_PUSH_TO_DECK",
        payload: bol
  }
}

export function loaderUp(bol){
  // can I put logic in my action emitters?
  bol = bol ? "active" : "";
  return {
        type: "LOADER_UP",
        payload: bol
  }
}

export function searchReturn(deckID){
  return {
        type: "POKEMON_SEARCH_RETURN",
        payload: deckID
  }
}
