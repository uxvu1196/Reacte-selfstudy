import React, { Component } from 'react'
import "./App.scss";
import Counter from './components/Counter/Counter';
import { Header } from './components/Header/Header';

/* //Body Component
//constructor damit übergibt maan parameters
class Body extends Component {

  render() {
    return (
      <div>
        <h1>Body Component</h1>
        <p>{this.props.title}</p>
        <p>{this.props.num}</p>
        <p>{this.props.myArr[0]}</p>
        <p>{JSON.stringify(this.props.myObj)}</p>
      </div>
    );
  }
}
 */

//Base comoponent
export default class App extends Component {
  multiply(a, b) {
    return a * b;
  }
  render() {
    return (
      <div className="App">
        {/* <Header
          title="Hallo Uyen"
          num={3} myArr={[11, 12, 14]}
          myObj={{ a: 350, b: 380 }}
          myFunc={(a, b) => a + b}
          multiply={this.multiply} />
        <Body
          title="Hallo Uyen"
          num={3} myArr={[11, 12, 14]}
          myObj={{ a: 350, b: 380 }}
          myFunc={(a, b) => a + b}
          multiply={this.multiply} /> */}
        <Counter initCount={0} />
        <Counter initCount={20} />
        <Counter initCount={300} />
        <Counter initCount={1000} />
      </div>
    )
  }
}
// export default App; ist das wie in Zeile 3, aber das ist nur der shorthand in Zeile 3













//------------------------------------------------------------------------------------

//Video 1
/*
function App() {
  return (
    <div className="App">
      <h1>Basic React</h1>
      <h2>INIT !!!</h2>
    </div>
  );
}
export default App;
 */

//Video 2

/* //1 ES6 Syntax
const Body = () => (
  <div>
    <h1>Inhalt #1</h1>
  </div>
) */

/* //2 ES6 Syntax mit {} sobald man eine geschweifte Klammer hinzufügt braucht man eine return statement
const Body = () => {
  return (
    <div>
      <h1>Inhalt #2</h1>
    </div>
  )
} */

/* // ES5 - Alte Syntax mit Schlüsselwort function
function Body() {
  return (
    <div>
      <h1>Inhalt #3</h1>
    </div>
  )
};
 */


/* //Base comoponent
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Basic React</h1>
        <Body />
      </div>
    )
  }
}
// export default App; ist das wie in Zeile 3, aber das ist nur der shorthand in Zeile 3 */