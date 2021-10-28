//rcc
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            count: props.initCount,
        };
    }
    //(props) = wir nehmen propertys von dem Parent-compoment entegen (app.js = Counter) und speichern sie in props rein
    //super ist eine JS Methode die zu Copomnent (grün) Methode geht und holt alle Propertys die in dem Constructor sind vom Component  und speichert sie bei porps in super rein.
    //Methode Super: Geht zu Methode Component(grün) in React und holt alle Propertys die in seinem Constructor sind. Alles vom Component an unseren Constructor in der Klasse Counter vererbt wird.


    /*   state = {
        //property
        count: 0,
        show: true,
    };
    //state ist das Object und count ist das key value parse
    //state kann man nicht verändern. Ist immutable
    //show = key, true = value. Damit wir mit den Count arbeiten können
    //Togglebutton ist wie ein Lichtschalter, zwei Zustände 0 und 1 */
    //===========================================================================
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
    //===========================================================================
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
    //===========================================================================
    //RESET
    handleReset = () => {
        this.setState(
            {
                count: 0,
            }
        )
    };
    //===========================================================================
    //TOGGLE
    handleToggle = () => {
        this.setState({
            show: !this.state.show,
        })
    }
    //! = negieren = abweisen, zurückweisen
    //Wir negieren was oben steht bsp. wenn oben true steht, wird es hier unten negiert und zu false gemacht. Lichtschalter, true-> false und dann false->true



    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleToggle}>{this.state.show ? "Hide Content" : "Show Content"}</button>
                {this.state.show ? <h2>{this.state.count}</h2> : ""}
                {/* <h2>{this.state.count}</h2> */}
            </div>
            //this. ist der Pointer auf unsere Klasse Counter
            //handleToggle kann man beliebig nenen wie man mag. Handle ist eine aussagekräftige Name für einen onClick weil wir was handeln.
            //Davor stand zwischen dem letzen Button "Toggle", das wurde gelöscht. Stattdessen wurde ein Object reingesetzt. Im Object kann man dann eine Condition=Bedingung eingeben, wie es da drinne aussehen soll. Also es geht nur um den reinen Text im Button was angezeigt werden sollte. Das können wir mit einer if/else Abfrage machen oder Shorthand sogenannte Terminal Operator
            //wir greifen auf unseren Show zu "this.state.show" und wenn es true ist "?" dann zeige bitte "Hide Content" ansonsten bitte "Show Content". Also ? = if und : = else
            //mit this.state.show einmal befehlen bitte überprüfen und wenn es true ist dann den count bitte anzeigen mit h2...
        )
    }
}
