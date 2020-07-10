import React, { Component } from 'react'

import Description from "./description"
import Options from "./options"

export default class Character extends Component {
   constructor(props) {
       super(props)

       this.state = {
           name: "Steve",
           characterClass: "Wizard",
           hitpoints: 100,
           lastAction: ""
       }

       this.handleFight = this.handleFight.bind(this)
       this.handleEat = this.handleEat.bind(this)
       this.handleRest = this.handleRest.bind(this)
   }

   handleFight() {
       this.setState({ 
           hitpoints: this.state.hitpoints - 10,
           lastAction: "Fight"
        })
   }

   handleEat() {
        this.setState({ 
            hitpoints: this.state.hitpoints + 10,
            lastAction: "Eat"
        })
    }

    handleRest() {
        this.setState({ 
            hitpoints: 100,
            lastAction: "Rest"
         })
    }

   render() {
       return (
           <div className='character-wrapper'>
                <Options
                    handleFight={this.handleFight}
                    handleEat={this.handleEat}
                    handleRest={this.handleRest}
                />
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