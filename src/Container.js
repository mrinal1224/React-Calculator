import {Container} from "@material-ui/core"
import { OutlinedInput , ButtonGroup , Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';



import React from 'react'

const container = () => {
    return (
        <div>
            <Container style={{ backgroundColor: '#262626', height: '100vh' , width:'40vw' }}>
                  <OutlinedInput color='secondary' style={{width:"100%" , backgroundColor:'white' , height:'15%'}}/>
                  
                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"20%"}}>
                      <Button>1</Button>
                      <Button>2</Button>
                      <Button>3</Button>
                  </ButtonGroup>
                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"10%"}}>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                  </ButtonGroup>

                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"10%"}}>

                      <Button>7</Button>
                      <Button>8</Button>
                      <Button>9</Button>
                      

                  </ButtonGroup>
                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"10%" }}>
                       <Button>0</Button>
                  </ButtonGroup>


                  <ButtonGroup size='large' fullWidth={true} style={{backgroundColor:"orange" , marginTop:"10%"}}>

                      <Button><AddIcon/></Button>
                      <Button><RemoveIcon/></Button>
                      <Button><ClearIcon/></Button>
                      <Button>/</Button>
                      <Button>=</Button>
                      

                  </ButtonGroup>
                 
            </Container>
        </div>
    )
}

export default container
