import cardsReducers from "./cards.reducer";


const rootReducer = () => {
  return  {
  cards : cardsReducers
    }
};

export default rootReducer();
