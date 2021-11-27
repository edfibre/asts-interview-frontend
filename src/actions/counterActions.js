export const ADD_TO_COUNTER = "@counter/add";
export const RESET_COUNTER = "@counter/reset";

export const addToCounter = (value) => (dispatch) => {
  dispatch({
    type: ADD_TO_COUNTER,
    payload: value,
  });
};

export const resetCounter = () => (dispatch) => {
  dispatch({
    type: RESET_COUNTER,
  });
};
