import React, { Component } from 'react';
import styled from 'styled-components';
import Maps from './Maps';
import Header from './Header';
import Modal from './Modal';
import { FAB } from 'react-material-design';

const Content = styled.div`
  display: flex;

`

const Add = styled.div`
    position: relative;
    float: right;
`
class Profile extends Component {
    constructor(props){
        super(props);
        this.state ={
            visible: false
        }
    }
    handlevisible = ()=> {
        this.setState({ visible: false });
    } 
    render() {
        return (
            <div>
                <Header/>
                <Modal visible={this.state.visible} handle={this.handlevisible}/>
                <Content>
                    <Maps/>
                </Content>
                <Add onClick={() =>this.setState({visible: true})}>
                <FAB location="floating-bottom-right"
                    icon="add"
                /> 
                </Add>                    
            </div>
        );
    }
}

export default Profile;