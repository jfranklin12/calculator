import React from "react";

const Button = ({ value, id, onClick }) => {
    return (
        <button id={id} onClick={() => onClick(value)}>
            {value}
        </button>
    );
};

export default Button;