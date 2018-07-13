import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Header from './Header';
import Question from './place/Question';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Wrapper = styled.div`
    display: flex;
    margin-top: 10%;
`
const Img = styled.img`
    width: 500px;
    height:500px;
    margin-right: 5%;
`
class Place extends Component {
    componentDidMount(){
        this.props.getPlace(this.props.match.params.id);
    }
    render() {
        console.log(this.props.data)
        return (
            <div>
            <Header/>
            <Wrapper>                
                <Img src="https://www.coninsa.co/sites/default/files/coninsa-construccion-bloque3-uniminuto-bello.jpg" placeholder="Image"/>
                <Menu/>
            </Wrapper>
            <Question/>
            </div>
        );
    }
}
const mapStateToProps = ({ data }) =>{
    return {
        data
    }
}
export default connect (mapStateToProps, actions)(Place);