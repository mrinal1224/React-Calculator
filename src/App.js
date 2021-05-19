
import React, { useState } from 'react'
import {Container} from "@material-ui/core"
import { OutlinedInput , ButtonGroup , Button } from '@material-ui/core';



const App = () => {

  const [currentNumber, setCurrentNumber] = useState("---");
  

   const setNumberFromClickEvent = e => {
    const numberToAppendFrom = isNaN(currentNumber) ? "" : currentNumber;
    setCurrentNumber(numberToAppendFrom + e.target.textContent);
  };

  return (
        <div>
            <Container style={{ backgroundColor: '#262626', height: '100vh' , width:'40vw' }}>
                  <OutlinedInput value={currentNumber} color='secondary' style={{width:"100%" , backgroundColor:'white' , height:'15%'}}/>
                  
                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"20%"}}>
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

                      <Button onClick={setNumberFromClickEvent}>+</Button>
                      <Button onClick={setNumberFromClickEvent}>-</Button>
                      <Button onClick={setNumberFromClickEvent}>X</Button>
                      <Button onClick={setNumberFromClickEvent}>/</Button>
                      
                      

                  </ButtonGroup>

                   <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"5%" }}>
                       <Button>BackSpace</Button>
                       <Button>Clear</Button>
                  </ButtonGroup>

                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"5%" }}>
                       <Button>=</Button>
                       
                  </ButtonGroup>
                 
            </Container>
        </div>
    )
}

export default App

