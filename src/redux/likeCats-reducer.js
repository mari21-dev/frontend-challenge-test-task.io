const ADD_TO_LIKED_CATS = "ADD_TO_LIKED_CATS";
const DELETE_FROM_LIKED_CATS = "DELETE_FROM_LIKED_CATS";

const initialState = {
  likedCats: [],
}

export const addLikeAction = (payload) => {
  return {
    type: ADD_TO_LIKED_CATS,
    payload,
  }
}

export const deleteFromLikedAction = (payload) => {
  return {
    type: DELETE_FROM_LIKED_CATS,
    payload,
  }
}

export const likedCatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKED_CATS:
      return { ...state, likedCats: [...state.likedCats, action.payload] };

    case DELETE_FROM_LIKED_CATS:
      return {
        ...state,
        likedCats: [...state.likedCats].filter((item) => item.id !== action.payload)
      }

    default:
      return state;
  }
}