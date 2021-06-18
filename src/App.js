
import Hello from './Components/Hello';
import Rectangle from './Components/Rectangle';
import Button from './Components/Button'
import React from "react"
import "./App.css"

function App() {
  const [recReacColor, setrecReacColor] = React.useState(true);
  const handleClicked  = (getBool)=>{
    // console.log(getBool)
    setrecReacColor(getBool);
  }
  return (
    <div className="App">
      <Hello/>
      <Rectangle isRedColor={recReacColor}/>
      <Button buttonClick = {handleClicked} isRed= {recReacColor}/>
    </div>
  );
}

export default App;
