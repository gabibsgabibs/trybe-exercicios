import React, { Component } from 'react'
import { fakeFetchSolutionsId } from '../fake-fetch';

class SolutionItem extends Component {

    state = {
      exercises: []
    }

  async componentDidMount() {
    const { id } = this.props.match.params;
    
    const response = await fakeFetchSolutionsId(id);
    const object = await response.json();

    this.setState({ exercises: object.exercises})
    
  }

  didPressBackButton = () => {
    this.props.history.push('/solutions')
  }

  render() {

    const { exercises } = this.state;

    return (
      <div>

        <button onClick={this.didPressBackButton}>Voltar</button>

        <ul>
          { exercises.map((exercise) => {
            return <li key={exercise}>Exercício n { exercise }</li>
          }) }
        </ul>
      </div>
    )
  }
}

export default SolutionItem;