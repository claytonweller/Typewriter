import pause from './pause'
import React, {Component} from 'react'



const speedInterpreter = (speed)=>{
  if(typeof speed === 'string'){
    speed = speed.toLowerCase()
  }

  switch(speed){
    case 'slow':
      return 150
    case 'fast':
      return 30
    case 'medium':
    case 'med':
     return 70
    default:
      if(Number.isInteger(speed)){
        return speed
      } else {
        return 50
      } 
  }
}

const typewrite = async (string, updater, speed) =>{
  speed = speedInterpreter(speed)
  let i = 0;
  let newString = '';
  const typer = ()=>{
    let char = string.charAt(i);
    newString=newString+char;
    updater(newString);
  }

  while (i<string.length){
     typer();
     await pause(speed);
     i++

  }
}

class Typewriter extends Component {
  constructor(){
    super();
    this.state={
      text:''
    }
  }


  componentDidMount(){
    typewrite(this.props.children, this.updateText, this.props.speed)
  }

  updateText = (text) =>{
    this.setState({text:text})
  }

  render(){
    return (
      <div className="typewriter" >
        <div>{this.state.text}</div>
        <div>{this.props.children}</div>
      </div>


    )
  }
}

export default Typewriter;