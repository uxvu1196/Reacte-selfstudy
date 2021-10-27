//rfa
import React from 'react';
import "./Header.scss";

export const Header = (props) => {
    return (
        <div className="header">
            <h1>Basic React</h1>
            <p>{props.title}</p>
            <p>{props.num}</p>
            <p>{props.myArr}</p>
            <p>{JSON.stringify(props.myObj)}</p>
            <p>{props.myObj.a}</p>
            <p>{props.myFunc(20, 50)}</p>
            <p>{props.multiply(2, 3)}</p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
};




/* import React, { Component } from 'react'
import "./Header.scss";

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
} */

//export deault Header; siehe oben, wäre Zeile 15 anfangs

