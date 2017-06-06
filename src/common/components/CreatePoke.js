
var deckID = 0;

function NewPokemon (
  name="",
  type="",
  species="Tell us about your new Pokemon",
  id="0"
)
  {

    this.name = name;
    this.type = type;
    this.species = species;
    this.deckID = "nd" + deckID++;
    this.id = id;
    this.img = "../../images/pokemon/" + id + ".png";


}

export default NewPokemon;
