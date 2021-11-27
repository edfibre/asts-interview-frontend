import { ADD_TO_COUNTER, RESET_COUNTER } from "../actions/counterActions";

const initialState = {
  value: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_COUNTER:
      return {
        value: state.value + action.payload,
      };
    case RESET_COUNTER:
      return {
        value: 0,
      };
    default:
      return state;
  }
}
