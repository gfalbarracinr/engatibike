import { messagesRef } from "../config/firebase";
import { FETCH_DATA } from "./types";

export const addData = newMessage => async dispatch => {
  messagesRef.push().set(newMessage);
};
export const addContent = (content, id) => async dispatch => {
  messagesRef.child(id).set(content);
}
export const fetchData = () => async dispatch => {
  messagesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.val()
    });
  });
};

export const getPlace = (id) => async dispatch => {
  
  messagesRef.child(id).on('value', snapshot =>{
    dispatch ({
      type: FETCH_DATA,
      payload: snapshot.val()
    })
  });
}
