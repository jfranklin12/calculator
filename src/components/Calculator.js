import React, { useState } from "react";
import Button from "./Button";

const Calculator = () => {
    // State for display value, operator, and store previous value
    const [displayValue, setDisplayValue] = useState("0");
    const [operator, setOperator] = useState("");
    const [previousValue, setPreviousValue] = useState(null);

    // number button function
    const handleNumBtnClick = (number) => {
        if (displayValue === "0") {
            setDisplayValue(number.toString());
        } else {
            setDisplayValue((prevState) => (prevState + number.toString()));
        }
    };

    // operator button function
    const handleOpBtnClick = (operator) => {
        if (previousValue !== null) {
            // equal button function
            console.log(operator);
        }
        setOperator(operator);
        setPreviousValue(parseFloat(displayValue));
        console.log(operator);
    }

    // decimal button function
    const handleDecBtnClick = () => {
        if (!displayValue.includes(".")){
            setDisplayValue((prevState) => prevState + ".");
        }
    };

    // clear button function
    const handleClrBtnClick = () => {
        setDisplayValue("0");
        setOperator("");
        setPreviousValue(null);
    };
    
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
            <div id="display">{displayValue}</div>

            {/* container for buttons */}
            <div className="buttons">
                {/* number buttons */}
                {numberButtons.map(({ value, id }) => (
                    <Button key={id} value={value} id={id} onClick={handleNumBtnClick} />
                ))}
                
                {/* operator buttons */}
                <Button key="add" value="+" id="add" onClick={handleOpBtnClick} />
                <Button key="subtract" value="-" id="subtract" onClick={handleOpBtnClick} />
                <Button key="multiply" value="*" id="multiply" onClick={handleOpBtnClick} />
                <Button key="divide" value="/" id="divide" onClick={handleOpBtnClick} />
                {/* clear button */}
                <Button key="clear" value="AC" id="clear" onClick={handleClrBtnClick} />
                {/* equal button */}
                {/* decimal button */}
                <Button key="decimal" value="." id="decimal" onClick={handleDecBtnClick} />

            </div>



        </div>
    );
};

export default Calculator;