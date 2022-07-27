import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends React.Component {

  state = {
    email: '',
    password: '',
    buttonDisabled: true
  }

  handleChange = (event) => {
    // atualiza a chave do input que tiver o evento
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { email, password } = this.state;
      const buttonIsDisabled = email.length === 0 || password.length === 0;

      this.setState({
        buttonDisabled: buttonIsDisabled
      })
    });
  }

  handleSubmit = (event) => {
    // previne que o email e senha apareçam na url quando submete
    event.preventDefault();
    const { email, password } = this.state;
    alert(`Foi feito login com o email ${email} e a senha ${password}`);
  }

  render() {

    const { email, password, buttonDisabled } = this.state;

    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          <h2>Login</h2>

          <EmailInput email={ email } handleChange={this.handleChange} />
          <PasswordInput password={ password } handleChange={this.handleChange} />

          <button disabled={buttonDisabled}>Fazer Login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;