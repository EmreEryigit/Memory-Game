
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { memoSliceActions } from '../store/memoSlice';

function PlayGround() {
    const dispatch = useDispatch()
    const choice1 = useSelector(state => state.memo.choice1)
    const choice2 = useSelector(state => state.memo.choice2)
    
   
    useEffect(() => {
         dispatch(memoSliceActions.shuffleCard())  
    }, [dispatch])
    const clickHandler= () => {
        dispatch(memoSliceActions.shuffleCard())
    }


    const cards = useSelector(state => state.memo.cards)
    const puan = useSelector(state => state.memo.puan)
    
    console.log(cards)
    console.log(choice1, choice2);
    const h1class = puan > 0 ? " text-success" : " text-danger"
  return (
    <React.Fragment>
    <h1 className={'mx-auto fst-italic' + h1class}>{puan} Points</h1>
    <button className='btn btn-primary d-block mx-auto' onClick={clickHandler}>Play</button>
    <div className="card-grid">
    {cards.map(card => <Card card={card} key={card.id} flipped={card === choice1 || card === choice2 || card.matched} />
         
     )}
    </div>
     
    </React.Fragment>
  );
}

export default PlayGround;
