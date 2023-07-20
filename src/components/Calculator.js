import React, { useState } from "react";
import NumberButton from "./NumberButton";

const Calculator = () => {
    // State for display value, operator, and store previous value
    const [displayValue, setDisplayValue] = useState("0");
    const [operator, setOperator] = useState("");
    const [previousValue, setPreviousValue] = useState(null);

    // switch case for buttons
    const handleButtonClick = (buttonValue) => {
        // case for numbers
        switch (buttonValue) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                handleNumBtnClick(buttonValue);
                break;
            // case for operators
            case "+":
            case "-":
            case "*":
            case "/":
                handleOperatorBtnClick(buttonValue);
                break;
            // case for decimals
            case ".":
                handleDecBtnClick();
                break;
            // case for clear
            case "clear":
                handleClearBtnClick();
                break;
            // case for equal
            case "=":
                handleEqualBtnClick();
                break;
            default:
                break;
        }
    };

    // function for number button click
    const handleNumBtnClick = (number) => {
        if (displayValue === "0" || operator !== "") {
            setDisplayValue(number);
            setOperator("");
        } else {
            setDisplayValue((prevState) => prevState + number);
        }
    };

    const handleOperatorBtnClick = () => {

    };

    const handleDecBtnClick = () => {

    };

    const handleClearBtnClick = () => {

    };

    const handleEqualBtnClick = () => {

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
                    <NumberButton key={id} value={value} id={id} onClick={handleButtonClick}/>
                ))}
                
                {/* operator buttons */}
                {/* clear button */}
                {/* equal button */}
                {/* decimal button */}

            </div>



        </div>
    );
};

export default Calculator;