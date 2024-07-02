import { useState } from "react";
import classes from "./App.module.css";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
// import Wrapper from './components/Wrapper'

function App() {
  const number = ["=", ".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["+", "-", "/", "*"];
  const [inputData, setInData] = useState("");
  const [calData, setCalData] = useState([]);
  function setStates(val) {
    if (operators.includes(val)) {
      setCalData([...calData, val]);
    } else {
      if (
        typeof parseInt(calData[calData.length - 1] + val) === "number" &&
        !operators.includes(calData[calData.length - 1])
      ) {
        if (val === ".") {
          if (calData[calData.length - 1].includes(".")) {
            return;
          }
        }
        const temp = [...calData];
        let last = temp.pop();
        setCalData([...temp, last + val]);
      } else {
        setCalData([...calData, val]);
      }
    }

    setInData((v) => v + val);
    console.log(calData);
  }

  function InputValueHandler(val) {
    if (calData.length === 0) {
      if (operators.includes(val) || val === "=") {
        return;
      }
      setCalData([val]);
      setInData(val);
    } else if (val === "=") {
      calculateHandler();
    } else {
      if (
        operators.includes(calData[calData.length - 1]) &&
        operators.includes(val)
      ) {
        return;
      } else {
        setStates(val);
      }
    }
  }

  function clearInputHandler() {
    setCalData([]);
    setInData("");
  }
  function calculateHandler() {
    try {
      const result = eval(inputData);
      setInData(result.toString());
      setCalData([]);
    } catch (error) {
      setInData("Error");
    }
  }
  return (
    <>
      <div className={classes.mainContainer}>
        <h1>Calculator</h1>
        <div className={classes.cal}>
          <Input val={inputData} />
          <Wrapper>
            <Buttons
              name={"C"}
              cln={"clearbtn"}
              clearInputHandler={clearInputHandler}
            ></Buttons>
            {operators.map((i) => {
              return (
                <Buttons
                  key={i}
                  name={i}
                  InputValueHandler={InputValueHandler}
                />
              );
            })}
            {number.reverse().map((i) => {
              return (
                <Buttons
                  key={i}
                  name={i}
                  InputValueHandler={InputValueHandler}
                />
              );
            })}
          </Wrapper>
        </div>
      </div>
    </>
  );
}

export default App;
