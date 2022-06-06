import React  from 'react';
import { useDispatch } from 'react-redux';
import { memoSliceActions } from '../store/memoSlice';
import "./Card.css"

function Card(props) {
    const dispatch = useDispatch()
   
    const delayedAction = () => {
        dispatch(memoSliceActions.validateCards())
    }
    const clickHandler = () => {
        dispatch(memoSliceActions.handleChoice(props.card))   
        setTimeout(() => {
            delayedAction()
        }, 750)
    }

  return (
    
      <div  className="card">
     {!props.flipped &&  <img onClick={clickHandler} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/225px-Unofficial_JavaScript_logo_2.svg.png" alt="" />}
        {props.flipped && <img src={props.card.src} className="card-img icons" alt="..." />}
        
            
          
      </div>
    
  );
}

export default Card;
