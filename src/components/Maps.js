import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import Pointer from './Pointer';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

const Wrapper = styled.div`
    height: 62vh;
    width: 60vw;
    margin-left: 20%;
`

class Maps extends Component {
    constructor(props){
        super(props);
        this.state={
            bike: false
        }
    }
    componentDidMount(){
        this.props.fetchData()
    }
    handleclick = (key) =>{
        this.props.history.push(`/place/${key}`);
    }
    render() {
        const { data } = this.props
        return (
        <Wrapper>

            <GoogleMapReact
                onChildClick={this.handleclick}
                bootstrapURLKeys={{ key:"AIzaSyBWVky7_Kj8hnp-SeDWwghd8X-7r8iI_6o" }}
                defaultCenter={{
                    lat: 4.6986861426,
                    lng: -74.090461879
                  }}
                defaultZoom={18}
            >
            {
             _.map(data, (value, key) => (
                <Pointer
                    key={key}
                    lat={value.LAT}
                    lng={value.LONG}
                    color={Math.floor(Math.random() * 2)}
                />
                ))
            }         
            </GoogleMapReact>
            <button onClick={() => this.props.history.push('/ciclovia')}>ciclorutas</button>
        </Wrapper>
        );
    }
}
const mapStateToProps = ({ data }) =>{
    return {
        data
    }
}
export default withRouter(connect(mapStateToProps, actions)(Maps));