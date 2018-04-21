import React, { Component } from 'react';
import Typewriter from './Typewriter'


class App extends Component {
  constructor(){
    super();
    this.state={
      text:'hello out there in the real world'
    }
  }

  componentDidMount(){
    // typewrite(this.state.text)

  }



  test = ()=>{
    this.setState({text: 'NEW TEXT'})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.test}> test </button>
          <h1 className="App-title">{this.state.text}</h1>
        <Typewriter speed='med'> 
           {this.state.text}
        </Typewriter>

        </header>
      </div>
    );
  }
}

export default App;
