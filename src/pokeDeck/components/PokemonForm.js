import React from 'react';
import Input from '../../common/components/TextInput'

class PokemonForm extends React.Component {

  render() {
    return (
      <form className="poke-form">

        <Input
          name="name"
          label="Pokemon Nickname"
          value={this.props.pokemon.name}
          onChange={this.props.onChange}
        />

        <Input
          name="type"
          label="What Type of Pokemon is this"
          value={this.props.pokemon.type}
          onChange={this.props.onChange}
        />

        <Input
          name="species"
          label="tell us about your new pokemon"
          value={this.props.pokemon.species}
          onChange={this.props.onChange}
        />

        {/* Future - set redirect back to deck and reset render */}
        <input type="submit" value="Catch 'Em All" onClick={this.props.onSave}/>

      </form>
    );
  }

}

// deprecated??
// PokemonForm.propTypes = {
//   pokemon: {
//     name: React.PropTypes.string.isRequired,
//     species: React.PropTypes.string,
//     type: React.PropTypes.string
//   },
//   onChange: React.PropTypes.func,
//   onSave: React.PropTypes.func
//
// }

export default PokemonForm;
