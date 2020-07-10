import React, { Component } from 'react';

import Character from "./characterComponents/character"
import CharacterCreator from "./characterCreater"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      characterList: []
    }

    this.getCharacters = this.getCharacters.bind(this)
  }

  componentDidMount() {
    this.getCharacters()
  }

  getCharacters() {
    fetch("http://127.0.0.1:5000/character/get", { method: "GET" })
    .then(response => response.json())
    .then(data => this.setState({ characterList: data }))
    .catch(error => console.log(error))
  }

  renderCharacters() {
    return this.state.characterList.map(character => {
      return <Character
                key={character.id}
                name={character.name}
                characterClass={character.character_class}
                hitpoints={character.hitpoints}
                id={character.id}
             />
    })
  }

  render() {
    return (
      <div className='app'>
        <CharacterCreator getCharacters={this.getCharacters} />
        {this.renderCharacters()}
      </div>
    );
  }
}
