import React from "react";

const NumberButton = ({ value, id, onClick }) => {
    return (
        <button id={id} onClick={() => onClick(value)}>
            {value}
        </button>
    );
};

export default NumberButton;