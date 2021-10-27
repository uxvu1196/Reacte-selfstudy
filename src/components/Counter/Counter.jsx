//rcc
import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        //property
        count: 0,
    }
    //state ist das Object und count ist das key value parse
    //state kann man nicht verändern. Ist immutable
    render() {
        return (
            <div>
                <p>Counter</p>
                {this.state.count}
            </div>
            //this. ist der Pointer auf unsere Klasse Counter
        )
    }
}
