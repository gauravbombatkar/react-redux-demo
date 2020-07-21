import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyBook } from '../redux/index';

const BookContainer = (props) => {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h1>Book Container</h1>
            <h2>Number of Books: {props.numberOfBook}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyBook(number)}>Buy {number} Book</button>
        </div>

    )
}

const mapStatetoProps = (state) => {
    return {
        numberOfBook: state.numberOfBook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBook: function (number) {
            dispatch(buyBook(number));
        }
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(BookContainer);
