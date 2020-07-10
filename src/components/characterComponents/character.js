import React, { Component } from 'react'

import Description from "./description"

export default class Character extends Component {
   constructor(props) {
       super(props)

       this.state = {
           name: "Steve",
           characterClass: "Wizard",
           hitpoints: 100,
           lastAction: ""
       }
   }

   render() {
       return (
           <div className='character-wrapper'>
               <Description 
                    name={this.state.name}
                    characterClass={this.state.characterClass}
                    hitpoints={this.state.hitpoints}
                    lastAction={this.state.lastAction}
                />
           </div>
       )
   }
}