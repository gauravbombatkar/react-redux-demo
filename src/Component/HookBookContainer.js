import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyBook } from '../redux';

export const HookBookContainer = () => {
    const numberOfBook = useSelector(state => state.numberOfBook);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Hook Container</h1>
            <h2>Number of Books-:{numberOfBook}</h2>
            <button onClick={() => dispatch(buyBook())}>Buy Book</button>
        </div>
    )
}

export default HookBookContainer;