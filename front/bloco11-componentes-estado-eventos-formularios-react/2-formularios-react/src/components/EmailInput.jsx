import React, { Component } from 'react'

class EmailInput extends Component {
  render() {
    return (
      <label>
        Email <br />

        <input 
          type="text" 
          name="email"
          id="email" 
          placeholder="Digite seu email"
          onChange={ this.props.handleChange }
        />
      </label>
    )
  }
}

export default EmailInput;