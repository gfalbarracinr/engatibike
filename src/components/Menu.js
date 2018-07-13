import React, { Component } from 'react';
import styled from 'styled-components';
import History from './place/History';
import Opinion from './place/Opinion';


const Wrapp = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: "button1 button2"
                         "text   text";

`
const Button = styled.button`
    grid-area: button1;
    cursor: pointer;
    background-color: pink;
    height: 40%;
`
const Button2 = styled(Button)`
    grid-area: button2;
`
class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            type: 'history'
        }
    }
    render() {
        return (
            <div>
            <Wrapp>
              <Button onClick={() =>this.setState({type: 'history'})}>Datos historicos</Button>
              <Button2 onClick={() =>this.setState({type: 'opinion'})}>Opiniones</Button2>      
              <History visible={this.state.type === 'history' ? true : false}/>
              <Opinion visible={this.state.type === 'opinion' ? true : false}/>
            </Wrapp>
            
            </div>
        );
    }
}

export default Menu;