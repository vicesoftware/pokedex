import React from 'react';

class Input extends React.Component {

  render(){

    return (

      <div className="form-field-wrapper">

      <label htmlFor={this.props.name}>{this.props.label}</label>
      <div className="field">
        <input type="text"
          name={this.props.name}
          className=""
          placeholder={this.props.placeholder}
          ref={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <div>{this.props.error}</div>
      </div>

      </div>

    );

  }


}

// Lint keeps throwing prop-type erros
// Input.propTypes = {
//   name: React.PropTypes.string,
//   className: React.PropTypes.string,
//   placeholder: React.PropTypes.string,
//   ref: React.PropTypes.string,
//   value: React.PropTypes.string,
//   onChange: React.PropTypes.func,
//   error: React.PropTypes.string
// }

export default Input;
