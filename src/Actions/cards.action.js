import { ADD_CARDS, REMOVE_CARDS, EDIT_CARDS } from "./types";


export const addCard = (data) => {
    return {
      type: ADD_CARDS,
      payload: data,
    };
  };

  export const removeCard = (data) => {
    return {
      type: REMOVE_CARDS,
      payload: data,
    };
  };

  export const editCard = (data) => {
    return {
      type: EDIT_CARDS,
      payload: data,
    };
  };