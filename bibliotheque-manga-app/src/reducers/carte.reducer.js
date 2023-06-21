import { GET_CARDS, POST_COLLECTION_CARDS } from '../actions/carte.action';

const initialState = {
  allCards: [],
  collectionCards:[],

};


export default function carteReducer(state= initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        allCards: action.payload,
      };
    case POST_COLLECTION_CARDS:
        return {
          ...state,
          collectionCards: [...state.collectionCards, action.payload],
        };
      
      break;
    default:
      return state;
  };
};

