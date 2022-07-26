import React, { Component } from 'react';
import './App.css';
import colors from './data';

class App extends Component {
  constructor(props) {
    super(props);

    // inicia a propriedade do state inicial
    this.state = {
      filter: '',
    }

    // da ao setFilterValue acesso ao this para poder atualizar o estado
    this.setFilterValue = this.setFilterValue.bind(this);
  }

  // pega os caracteres do input
  // quando é arrow function não precisa do bind ali em cima
  setFilterValue = (event) => {
    this.setState({
      filter: event.target.value,
    });
  } 

  render() {

    const { filter } = this.state;

    const filteredColors = colors.filter((colorItem) => {
      const color = colorItem.color;
      return color.includes(filter);
    })

    const htmlListOfElement = filteredColors.map((colorItem) => {
      return <li key={ colorItem.value }>
        { colorItem.color } em hexadecimal é: { colorItem.value }
      </li>
    });

    return (
      <main>
        <input onChange={ this.setFilterValue } type="text" />

        <ul>
          { htmlListOfElement }
        </ul>
      </main>
    );
  }

}

export default App;
