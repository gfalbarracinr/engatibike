import React, { Component } from 'react';
import Header from './Header';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import SanitizedHTML from 'react-sanitized-html';
import _ from 'lodash';

const Obra = styled.div`
    margin-left: 20px;
    padding: 30px;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    background-color: #C0C0C0;
`
class Obras extends Component {

    componentDidMount(){
        this.props.fetchData();
    }
    render() {
        const {data} = this.props;
        return (
            <div>
                <Header/>
                {
                    _.map(data, (value, key)=>(
                        <Obra key={key}>
                            {/*<div dangerouslySetInnerHTML={{__html: value.TITULO}} />*/}
                            <SanitizedHTML
                                allowedTags={[ 'b', 'h1', 'em', 'strong', 'p' ]}
                                html={value.TITULO}

                            />
                            {value.AUTOR} <br/>
                            {value.DIRECCION} <br/>
                        </Obra>
                    ))
                }
            </div>
            
        );
    }
}

const mapStateToProps = ({ data }) =>{
    return {
        data
    }
}
export default withRouter(connect(mapStateToProps, actions)(Obras));