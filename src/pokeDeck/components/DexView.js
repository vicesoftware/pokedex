import React from 'react';
import { connect } from 'react-redux';
import * as user from '../../actions'


class DexView extends React.Component {

  constructor(props, context){
    super(props, context);

    this.onPokeSearch = this.onPokeSearch.bind(this);
    this.loaderCheck = this.loaderCheck.bind(this);
  }

  onPokeSearch(){
    console.log(this.props.glossary);
    this.props.dispatch(user.addToDeck(this.props.glossary));
    // Future - set to redirect back to user deck
  }

  loaderCheck(){
    console.log(this.props.glossary.loader);
  }

  render(){

    return (
      <div className="dex-view">

          <div className="img-head">

            <div className="img-view">
              {/* Bug - image will only appear with require statement */}
              <img alt="pokemon index" src={this.props.glossary.img} />
            </div>

            <div>
              <h2>{this.props.glossary.name}</h2>
              <h4>{this.props.glossary.type}</h4>
            </div>

          </div>

          <div className="dex-ai-view">
            <div className="ai-eye">
              <span className={this.props.glossary.loader}>
                <img alt="loader" onClick={this.loaderCheck}
                  className={"dex-loader"}
                  src={require("../../images/pageloader.gif")}
                />
              </span>
            </div>

            <div className="ai-fx">

              <div className="btn red" onClick={this.onPokeSearch}>
                {/* <Redirect push to="/deck" /> */}
                add to deck
              </div>
              <div className="btn yellow"></div>
              <div className="btn green"></div>

            </div>

            <div className="grate"></div>

          </div>

          <div className="dex-content-view">
            <div className="dex-content-viewport">
              <p>{this.props.glossary.species}</p>
            </div>
          </div>

      </div>

    );

  }

}

function mapStateToProps(state, ownProps){

  return {
    user: state.user,
    glossary: state.glossary
  };
}

export default connect(mapStateToProps)(DexView);
