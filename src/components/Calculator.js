import React, { useState } from "react";
import Button from "./Button";

const Calculator = () => {
    // State for display value, operator, and store previous value
    const [currentValue, setCurrentValue] = useState("0");
    const [operator, setOperator] = useState("");
    const [input, setInput] = useState([]);
    const [isEqualClicked, setIsEqualClicked] = useState(false);
    const isOperator = (value) => {
        return ["+", "-", "*", "/"].includes(value);
      };

    // number and decimal button function
    const handleNumAndDecBtnClick = (number) => {
        if (isEqualClicked) {
            setCurrentValue(number.toString());
            setInput([number.toString()]);
            setIsEqualClicked(false);
        } else if (currentValue === "0" || operator !== "") {
            setCurrentValue(number.toString());
            setInput((prevInput) => [...prevInput, number.toString()]);
            setOperator("");
        } else {
            const lastEntry = input[input.length - 1];
            if (number === "." && lastEntry.includes(".")) {
                return;
            }
            if (lastEntry.includes(".")) {
                setCurrentValue((prevState) => prevState + number.toString());
                setInput((prevInput) => [...prevInput.slice(0, -1), lastEntry + number.toString()]);
            } else {
                setCurrentValue((prevState) => prevState + number.toString());
                setInput((prevInput) => [...prevInput.slice(0, -1), prevInput[prevInput.length - 1] + number.toString()]);
            }
        }
    };

    // operator button function
    const handleOpBtnClick = (operator) => {
        if (input.length > 0) {
            if (isEqualClicked) {
                setInput((prevInput) => [currentValue, operator]);
                setIsEqualClicked(false);
            } else {
                const lastEntry = input[input.length - 1];
                if (isOperator(lastEntry)) {
                    if (operator === "-") {
                        setInput((prevInput) => [...prevInput, operator]);
                    } else {
                        setInput((prevInput) => [...prevInput.slice(0, -1), operator]);
                    }
                    
                } else {
                    setInput((prevInput) => [...prevInput, operator]);
                }
                
            }
            setCurrentValue(operator);
            setOperator(operator);
        }

    }

    // clear button function
    const handleClrBtnClick = () => {
        setCurrentValue("0");
        setOperator("");
        setInput([]);
        setIsEqualClicked(false);
    };

    // equal button function
    const handleEqualBtnClick = () => {
        if (input.length > 0 && !isNaN(parseFloat(input[input.length - 1]))) {
            const result = calcResult();
            setInput((prevInput => [...prevInput, "=", result]));
            setCurrentValue(result.toString());
            setOperator("");
            setIsEqualClicked(true);
        }
    }

    // calculate result
    const calcResult = () => {
        try {
            let result = input.length > 0 ? parseFloat(input[0]) : 0;

            for (let i = 1; i < input.length; i += 2) {
                const operator = input[i];
                let nextNumber = parseFloat(input[i + 1]);

                if (isOperator(operator) && isNaN(nextNumber)) {
                    nextNumber = -parseFloat(input[i + 2]);
                    i += 2;
                }

                switch (operator) {
                    case "+":
                        result += nextNumber;
                        break;
                    case "-":
                        result -= nextNumber;
                        break;
                    case "*":
                        result *= nextNumber;
                        break;
                    case "/":
                        result /= nextNumber;
                        break;
                    default:
                        break;
                }
            }

            return result;
        } catch (error) {
            // handle calculation errors
            console.error("Error during calculation:", error);
            return "Error";
        }
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
            <div id="formula">{input}</div>
            <div id="display">{currentValue}</div>

            {/* container for buttons */}
            <div className="buttons">
                {/* number buttons */}
                {numberButtons.map(({ value, id }) => (
                    <Button key={id} value={value} id={id} onClick={() => handleNumAndDecBtnClick(value)} />
                ))}

                {/* operator buttons */}
                <Button key="add" value="+" id="add" onClick={() => handleOpBtnClick("+")} />
                <Button key="subtract" value="-" id="subtract" onClick={() => handleOpBtnClick("-")} />
                <Button key="multiply" value="*" id="multiply" onClick={() => handleOpBtnClick("*")} />
                <Button key="divide" value="/" id="divide" onClick={() => handleOpBtnClick("/")} />
                {/* clear button */}
                <Button key="clear" value="AC" id="clear" onClick={handleClrBtnClick} />
                {/* equal button */}
                <Button key="equal" value="=" id="equals" onClick={handleEqualBtnClick} />
                {/* decimal button */}
                <Button key="decimal" value="." id="decimal" onClick={handleNumAndDecBtnClick } />

            </div>



        </div>
    );
};

export default Calculator;