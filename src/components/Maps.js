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
    width: 100vw;

`

class Maps extends Component {
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
                    lat: 4.7085,
                    lng: -74.111
                  }}
                defaultZoom={14}
            >
            {
             _.map(data, (value, key) => (
                <Pointer
                    key={key}
                    lat={value.LAT}
                    lng={value.LONG}
                />
                ))
            }
            
            
            
            </GoogleMapReact>
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