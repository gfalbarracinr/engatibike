import React from 'react';

const style ={
  border: '5px solid #f44336',
  borderRadius: '50%',
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#1da1f2',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
}
const style2 ={
    border: '5px solid #1da1f2',
    borderRadius: '50%',
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#1da1f2',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
    cursor: 'pointer'
}
const Pointer = (props) => {
    
    if (props.color === 1){
        return (
            <div style={style}>
            </div>
        );
    }else{
        return (
            <div style={style2}>
            </div>
        );
    }   
};

export default Pointer;