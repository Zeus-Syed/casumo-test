import { ADD_CARDS, EDIT_CARDS, REMOVE_CARDS } from '../Actions/types';

const INITIAL_STATE = {
  cards: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CARDS:
            return {
                ...state,
                cards: [...state.cards, action.payload],
            };

        case REMOVE_CARDS:
            return {
                ...state,
                cards: state.cards.filter((item) => item.cvc.value !== action.payload),
            };

        case EDIT_CARDS: {

            const index = state.cards.findIndex((item)=> item.cvc.value === action.payload.cvc.value)
            const tempCard = [...state.cards];
            tempCard[index] = action.payload;
            return {
                ...state,
                cards: tempCard,
            }
        }

      default:
        return state;
    }
  };
  
  export default userReducer;