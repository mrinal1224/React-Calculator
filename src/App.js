
import React, { useState } from 'react'
import {Container} from "@material-ui/core"
import { OutlinedInput , ButtonGroup , Button } from '@material-ui/core';



const App = () => {

  const [currentNumber, setCurrentNumber] = useState("---");
  const [previousNumber, setPreviousNumber] = useState(0);
  const [currentOperator, setCurrentOperator] = useState("");
 
  

  

   const setNumberFromClickEvent = e => {
    const numberToAppendFrom = isNaN(currentNumber) ? "" : currentNumber;
    setCurrentNumber(numberToAppendFrom + e.target.textContent);
  };

   const handleClear = (e) => {
    const clearScreen = '---';
    setCurrentNumber(e.target.value=clearScreen);
  };




  const clearLastNumber =(e)=>{

    let lastnumberRemoved = currentNumber.substr(0 , currentNumber.length-1)
    setCurrentNumber(lastnumberRemoved)

  }


  const setOperatorFromClickEvent = e => {
    if (currentOperator) {
      performOperation(currentOperator);
    } else {
      setPreviousNumber(parseInt(currentNumber));
      setCurrentNumber("---");
    }

    const operator = e.target.textContent;
    setCurrentOperator(operator);
  };

  const performOperation = operator => {
    switch (operator) {
      case "+":
        setPreviousNumber(previousNumber + parseInt(currentNumber));
        setCurrentNumber("---");
        break;
      case "-":
        setPreviousNumber(previousNumber - parseInt(currentNumber));
        setCurrentNumber("---");
        break;
      case "*":
        setPreviousNumber(previousNumber * parseInt(currentNumber));
        setCurrentNumber("---");
        break;
      case "/":
        setPreviousNumber(previousNumber / parseInt(currentNumber));
        setCurrentNumber("---");
        break;
      default:
         
    }
  };

    const finalizeOperations = () => {
    performOperation(currentOperator);
    setCurrentNumber("---")
    
   
  };

  return (
        <div>
            <Container style={{ backgroundColor: '#262626', height: '100vh' , width:'40vw' }}>
                  <OutlinedInput value={currentNumber} color='secondary' style={{width:"100%" , backgroundColor:'white' , height:'8%' , marginTop:"5%"}}/>
                  <OutlinedInput value={previousNumber} color='secondary' style={{width:"100%" , backgroundColor:'white' , height:'8%' , marginTop:"5%"}}/>
                 
                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"6%"}}>
                      <Button onClick={setNumberFromClickEvent}>1</Button>
                      <Button onClick={setNumberFromClickEvent}>2</Button>
                      <Button onClick={setNumberFromClickEvent}>3</Button>
                  </ButtonGroup>
                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"5%"}}>
                    <Button onClick={setNumberFromClickEvent}>4</Button>
                    <Button onClick={setNumberFromClickEvent}>5</Button>
                    <Button onClick={setNumberFromClickEvent}>6</Button>
                  </ButtonGroup>

                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"5%"}}>

                      <Button onClick={setNumberFromClickEvent}>7</Button>
                      <Button onClick={setNumberFromClickEvent}>8</Button>
                      <Button onClick={setNumberFromClickEvent}>9</Button>
                      

                  </ButtonGroup>
                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"5%" }}>
                       <Button onClick={setNumberFromClickEvent}>0</Button>
                  </ButtonGroup>


                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"5%"}}>

                      <Button operator onClick={setOperatorFromClickEvent}>*</Button>
                      <Button operator onClick={setOperatorFromClickEvent}>/</Button>
                      <Button operator onClick={setOperatorFromClickEvent}>+</Button>
                      <Button operator onClick={setOperatorFromClickEvent}>-</Button>
                      
                      

                  </ButtonGroup>

                   <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"5%" }}>
                       <Button onClick={clearLastNumber}>BackSpace</Button>
                       <Button onClick={handleClear}>Clear</Button>
                  </ButtonGroup>

                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"5%" }}>
                       <Button onClick={finalizeOperations}>=</Button>
                       
                  </ButtonGroup>
                 
            </Container>
        </div>
    )
}

export default App

