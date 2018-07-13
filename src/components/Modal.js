import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

const Wrapp = styled.div`
    position: fixed;
    top: 10%;
    left: 10%;
    z-index: 2;
    width: 80%;
    height: 500px;
    background-color: white;
    display: ${props =>  props.visible ? 'block' : 'none'};
    border: 5px solid black;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;

`
const Label = styled.label`
    margin-top: 5%;
    margin-left: 10%;
`
const Input = styled.input`
    position: absolute;
    left: 250px;
`
const Text = styled.textarea`
    position: absolute;
    width: 300px;
    height: 100px;
    left: 250px;
`
const Submit = styled(Input)`
    margin-top: 10%;
    top: 300px;

`
const Span = styled.div` 
    position: absolute;
    top: 30px;
    left:900px;
    cursor:pointer;
`
class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            obra: '',
            author: '',
            address: '',
            article: '',
        }
    }
    handleChangeObra = (event) =>{
        this.setState({obra: event.target.value});
    }
    handleChangeAuthor = (event) =>{
        this.setState({author: event.target.value});
    }
    handleChangeAddress = (event) =>{
        this.setState({address: event.target.value});
    }
    handleChangeArticle = (event) =>{
        this.setState({article: event.target.value});
    }
    onResult = (result) =>{
        console.log("resultado", result)
    }
    handleSubmit = () =>{
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyD52vrFQAKxxWTBliSChW1E1K5yt9XldjI`)
        .then(response=>(
            alert(response)
        ))
        let place = {

            'AUTOR': this.state.author,
            'CLASIFICACION': "ESCULTURA ABSTRACTA",
            'CONSECUTIVO': 371,
            'DIRECCION': this.state.address,
            'FECHA ELABORACION': new Date(),
            'LAT': 4.64803051997,
            'LOCALIDAD': "ENGATIVA",
            'LONG': -74.0623648525,
            'OBJECTID': 370,
            'TITULO': this.state.obra

        }
        console.log(place)
        this.props.addData(place);
    }
    render() {
        return (
            <Wrapp visible={this.props.visible}>
                <Span onClick={this.props.handle}>X</Span>
                <Form onSubmit={this.handleSubmit}>
                    <Label>
                        Nombre Obra:
                        <Input type="text" value={this.state.obra} onChange={this.handleChangeObra} name="name" />
                    </Label>
                    <Label>
                        Nombre Autor:
                        <Input type="text" value={this.state.author} onChange={this.handleChangeAuthor} name="name" />
                    </Label>
                    <Label>
                        Dirección:
                        <Input type="text" value={this.state.address} onChange={this.handleChangeAddress} name="name" />
                    </Label>
                    <Label>
                        Articulo:
                        <Text type="text" value={this.state.article} onChange={this.handleChangeArticle} name="name" />
                    </Label>
                    <Submit type="submit" value="Submit" />
                </Form>
            </Wrapp>
        );
    }
}

export default connect(null, actions)(Modal);