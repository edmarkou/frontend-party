const types = {
  ATTACH_COUNTRIES: "ATTACH_COUNTRIES",
  UPDATE_USER_STATE: "UPDATE_USER_STATE"
};

const attachCountries = payload => ({
  type: types.ATTACH_COUNTRIES,
  payload
});

const updateUserState = payload => ({
  type: types.UPDATE_USER_STATE,
  payload
});

export default {
  types,
  attachCountries,
  updateUserState
};