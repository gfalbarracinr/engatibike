import React from 'react';

const Opinion = (props) => {
    if (props.visible){
        return (
            <div>
                Caja de Opiniones
            </div>
        );
    }else{
        return("");
    }
};

export default Opinion;