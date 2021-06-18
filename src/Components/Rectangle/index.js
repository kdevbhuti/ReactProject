import React from "react"
import "./rectangle.css"

const Rectangle = ({isRedColor}) =>{
    return(
        <div>
            {isRedColor ?  <div className="red-Rectangle"></div> : <div className="green-Rectangle"></div>}
        </div>
        
        
      
    )
}

export default Rectangle;