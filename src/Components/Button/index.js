import React from "react";
import "./button.css"

const Button = ({isRed, buttonClick =() => {}}) =>{
    const handleChange = ()=>{
        if(isRed){
            buttonClick(false)
        }else{
            buttonClick(true)
        }
    }
    return(
    <div className="buttonSection">
        <button className="button" onClick={handleChange}>Press</button>
        {!isRed ?<h4 className="buttonClicked">Button Clicked</h4>: null}
    </div>
    )
}


export default Button;