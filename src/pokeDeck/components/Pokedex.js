import React from 'react';
import Search from './Search';
import '../../styles/styles.css'
import DexView from './DexView'


class Pokedex extends React.Component {

  render(){

    return (
      <div className="pokedex">
        <div className="pokedex-view">
          <div className="pokedex-wrapper">
            <Search />
            <DexView />
          </div>
        </ div>
      </div>
    );

  }

}


export default Pokedex;
