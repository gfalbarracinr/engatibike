import React, { Component } from 'react';
import styled from 'styled-components';
import Maps from './Maps';
import Header from './Header';

const Img = styled.img`
    max-width: 400px;
    height: 400px;
    margin-left: 10%;
`
const Content = styled.div`
  display: flex;

`
class Profile extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content>
                    <Maps/>
                    <Img src="http://getdrawings.com/img/facebook-profile-picture-silhouette-14.jpg" placeholder="profile pic"/>
                </Content>
            </div>
        );
    }
}

export default Profile;