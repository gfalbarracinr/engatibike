import React, {Component} from 'react';
import styled from 'styled-components'; 
import {Link} from 'react-router-dom';
const Wrapp = styled.div`

  background-color:#FE9901;
  width: 40%;

  & > a{
      color: black;
      text-decoration:none;
  }
`

class Header extends Component {
    render() {
        return (
            <Wrapp>
                <Link to='/'><h1>LOS RETOS DE HOY</h1></Link>
            </Wrapp>
        );
    }
}

export default Header;