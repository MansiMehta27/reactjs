import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT_COUNDER, INCREMENT_COUNDER } from '../ActionTypes';

function Counter(props) {
    const dispach = useDispatch();
    const c = useSelector(state=>state.counter)

    const handleIncrement=()=>{
            dispach(INCREMENT_COUNDER())
    }
    const handleDecrement=()=>{
        dispach(DECREMENT_COUNDER())
    }
    return (
        <div>
                    <button onClick={()=>handleIncrement()}>+</button>
                    <p>{c.counter}</p>
                    <button onClick={()=>handleDecrement()}>-</button>
        </div>
    );
}

export default Counter;