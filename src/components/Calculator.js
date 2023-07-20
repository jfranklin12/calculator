import React, { useState } from "react";
import NumberButton from "./NumberButton";

const Calculator = () => {
    
    // data for number buttons
    const numberButtons = [
        { value: 0, id: "zero" },
        { value: 1, id: "one" },
        { value: 2, id: "two" },
        { value: 3, id: "three" },
        { value: 4, id: "four" },
        { value: 5, id: "five" },
        { value: 6, id: "six" },
        { value: 7, id: "seven" },
        { value: 8, id: "eight" },
        { value: 9, id: "nine" },
      ];

    return (
        <div className="calculator">
            {/* display for calculator */}
            <div id="display"></div>

            {/* container for buttons */}
            <div className="buttons">
                {numberButtons.map(({ value, id }) => (
                    <NumberButton key={id} value={value} id={id} />
                ))}
                {/* number buttons */}
                {/* operator buttons */}
                {/* clear button */}
                {/* equal button */}
                {/* decimal button */}

            </div>



        </div>
    );
};

export default Calculator;