import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../Services/Actions/CounterAction';

const Counter = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    // console.log(count);
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }

    const handleDecrement = () =>{
        dispatch(decrementCounter())
    }
    const handleReset = () =>{
        dispatch(resetCounter())
    }

    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button><br />
            <button onClick={handleDecrement}>Decrement</button><br />
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;