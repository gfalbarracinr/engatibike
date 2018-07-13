import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
    margin-top: 3%;
    text-align: right;
    grid-area: text;

`
const Opinion = (props) => {
    if (props.visible){
        return (
            <Div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis cum montes mus ridiculus vehicula vestibulum augue, at eget vulputate id quis turpis. Sagittis pulvinar laoreet quisque bibendum aptent sem sollicitudin vestibulum, cum venenatis class feugiat malesuada magna arcu metus dui, gravida convallis sociis mus maecenas eget aliquet. Tempus dapibus conubia nam habitasse in ultrices quisque tincidunt velit mollis aptent vitae malesuada, mauris magnis scelerisque lobortis vehicula sagittis libero egestas morbi taciti phasellus varius.
                </p>
            </Div>
        );
    }else{
        return("");
    }
};

export default Opinion;