import React, { Component } from 'react';

import Character from "./characterComponents/character"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Character />
      </div>
    );
  }
}
