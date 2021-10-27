//rcc
import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        //property
        count: 0,
    };


    //INCREMENT
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1,
            //count: ++this.state.count + 1,
            //Objekt: key ist der "count:"" oben 
        }
        );
    };
    //1. Metgode erstellt - mit this.state holen wir den eigentlichen state von oben herunter, weil state an sich unveränderbar ist
    //2.setState ist eine Methode - damit wird state überschrieben

    //DECREMENT
    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: --this.state.count
            });
        } /* else {
            this.setState({
                count: 0
            })
        } */
    }
    /*this.setState({
    count: this.state.count - 1,
    /count: --this.state.count - 1,
    }) */

    //RESET
    handleReset = () => {
        this.setState(
            {
                count: 0,
            }
        )
    };

    //state ist das Object und count ist das key value parse
    //state kann man nicht verändern. Ist immutable
    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleReset}>Reset</button>
                <h2>{this.state.count}</h2>
            </div>
            //this. ist der Pointer auf unsere Klasse Counter
        )
    }
}
