import actions from '../actions/actions.js';

const defaultState = {
  countries: [],
  loggedIn: localStorage.getItem('userToken') ? true : false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.types.UPDATE_USER_STATE: 
      return { ...state, loggedIn: action.payload };
    case actions.types.ATTACH_COUNTRIES: 
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

export default reducer;