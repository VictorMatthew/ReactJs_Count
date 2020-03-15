import React, {Component} from "react";

const Counter = ({onDecrement, onIncrement, count}) => (
    <div>
        <p>count example</p>
        <button onClick={onDecrement}>
            -
        </button>

        <span>{count.number}</span>

        <button onClick={onIncrement}>
            +
        </button>

    </div>
);

export default Counter
