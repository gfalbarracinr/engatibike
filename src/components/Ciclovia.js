import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { withRouter } from 'react-router-dom';
const Iframe = styled.iframe`

`

const Wrapper = styled.div`
    height: 62vh;
    width: 60vw;
    margin-left: 20%;
`

const Ciclovia = (props) => {
    
    return (
        <div>
            <Header/>
            <Wrapper>
                <Iframe src="https://www.google.com/maps/d/embed?mid=1BZqeTtkmI-zmgAbhZECpx-OH060" width="640" height="480"></Iframe>
                <br/>
                <button onClick={() =>props.history.push('/') }>lugares</button>
            </Wrapper>

        </div>
    );
};

export default withRouter(Ciclovia);