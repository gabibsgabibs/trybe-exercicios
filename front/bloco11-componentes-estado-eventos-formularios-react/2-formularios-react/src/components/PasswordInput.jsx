import React, { Component } from 'react'

class PasswordInput extends Component {
  render() {
    return (
      <label>
        Senha <br />

        <input 
          type="password" 
          name="password"
          id="password" 
          placeholder="Digite sua senha"
          onChange={ this.props.handleChange }
          />
      </label>
    )
  }
}

export default PasswordInput;