import React, {Component} from 'react';
import styled from 'styled-components'; 
import {Link} from 'react-router-dom';
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto');

`
const Wrapp = styled.div`
  display: flex;
  background-color:#F8B596;
  width: 100%;
  margin-bottom:5%;
`
const Div= styled.div`
  align-self: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 2%;
  & >h6 {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 15%;
  }
`
const Img = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
`
const DivTitle = styled.div` 
  width: 80%;
  & > a{
      font-family: 'Roboto', sans-serif;
      color: black;
      text-decoration:none;
  }
  margin-left: 40%;
  @media (max-width: 700px) {
    margin-left: 10%;
  }

`
class Header extends Component {
    render() {
        return (
            <Wrapp>
                <DivTitle>
                    <Link to='/'><h1>LOS RETOS DE HOY</h1></Link>
                </DivTitle>
                <Div>
                    <Img src="http://getdrawings.com/img/facebook-profile-picture-silhouette-14.jpg" placeholder="profile pic"/>
                    <h6>Juanita</h6>
                </Div>
            </Wrapp>
        );
    }
}

export default Header;