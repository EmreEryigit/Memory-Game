import React, { useState } from 'react';

import "./Card.css"

function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const clickHandler = () => {
        props.handleChoice(props.card);
        
    }
  return (
    <div className="col-md-3 d-inline-block" style={{backgroundColor: "white"}}>
      <div  className="card" style={{width: "10rem"}}>
     {!props.flipped &&  <img onClick={clickHandler} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/225px-Unofficial_JavaScript_logo_2.svg.png" alt="" />}
        {props.flipped && <img src={props.card.src} className="card-img icons" alt="..." />}
        
            
          
      </div>
    </div>
  );
}

export default Card;
