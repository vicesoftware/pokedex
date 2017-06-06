
const DEF_DEX_STATE = {
    name: '',
    pokeType: "",
    species: "",
    id: "",
    img: "",
    custom: ['new pokeA', 'new pokeB'],
    loader: false
};

const dexReducer = (state = DEF_DEX_STATE, action) => {
  switch (action.type) {
    case 'LOADER_UP':
      return {...state, loader: action.payload }
      break;
    case "POKEMON_SEARCH_RETURN":
      return (Object.assign({}, state, {
          name: action.payload.name,
          pokeType: action.payload.pokeType,
          species: action.payload.species,
          img: "../../images/pokemon/" + action.payload.id + ".png",
          deckID: action.payload.deckID,
          id: action.payload.id
      }));

      break;
    default: return state;

  }
}

export default dexReducer;
