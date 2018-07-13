import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapp = styled.div`
    width: 100%;
    grid-area: text;

`
class History extends Component {
    render() {
        if (this.props.visible){
            return (
                <Wrapp>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis cum montes mus ridiculus vehicula vestibulum augue, at eget vulputate id quis turpis. Sagittis pulvinar laoreet quisque bibendum aptent sem sollicitudin vestibulum, cum venenatis class feugiat malesuada magna arcu metus dui, gravida convallis sociis mus maecenas eget aliquet. Tempus dapibus conubia nam habitasse in ultrices quisque tincidunt velit mollis aptent vitae malesuada, mauris magnis scelerisque lobortis vehicula sagittis libero egestas morbi taciti phasellus varius.
                    </p>
                    <p>
                        Nullam in venenatis suspendisse senectus sed curae sociis ad, risus lacinia aliquam vehicula vivamus non penatibus, montes quis vitae class volutpat potenti mattis. Netus feugiat magna iaculis mattis lacus nunc nec vel interdum lobortis, per aliquam tellus primis elementum varius justo condimentum habitasse, nascetur suscipit porttitor eu dui auctor ac vestibulum aliquet. Curabitur dictumst curae neque massa vulputate tortor in, sodales euismod mollis sed diam lacinia vestibulum inceptos, tellus auctor ligula nunc gravida ut.
                    </p>
                </Wrapp>
            );
        }else{
            return("");
        }
    }
}

export default History;