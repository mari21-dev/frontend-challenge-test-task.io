import { catsApi } from "../utils/api";

const GET_CATS = "GET_CATS";
const SHOW_LIKE = "SHOW_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";
const CHANGE_STATUS = "CHANGE_STATUS";

const initialState = {
  cats: [],
  status: 'pending',
}

export const getCatsAction = (payload) => {
  return {
    type: GET_CATS,
    payload,
  }
}

export const showLikedCardAction = (payload) => {
  return {
    type: SHOW_LIKE,
    payload,
  }
}

export const removeLikeAction = (payload) => {
  return {
    type: REMOVE_LIKE,
    payload,
  }
}

export const changeStatusAction = (payload) => {
  return {
    type: CHANGE_STATUS,
    payload,
  }
}

export const getCatsAsync = () => {
  return function (dispatch) {
    dispatch(changeStatusAction('loading'));
    catsApi.getCats()
      .then((res) => {
        dispatch(getCatsAction(res.data));
        dispatch(changeStatusAction('pending'));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return { ...state, cats: [...state.cats, ...action.payload] }

    case SHOW_LIKE:
      return {
        ...state,
        cats: [...state.cats].map((item) => {
          if (item.id === action.payload) {
            return { ...item, isLiked: true }
          } else {
            return item;
          }
        })
      }

    case REMOVE_LIKE:
      return {
        ...state,
        cats: [...state.cats].map((item) => {
          if (item.id === action.payload) {
            return { ...item, isLiked: false }
          } else {
            return item;
          }
        })
      }

    case CHANGE_STATUS:
      return { ...state, status: action.payload }

    default:
      return state;
  }
}