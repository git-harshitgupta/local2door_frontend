const initialState = {
  cardData: [],
};

export default function cardItems(state=initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log(action);
      return {
        ...state,
        cardData: action.productData,
      };

    default:
      return state
  }
}
