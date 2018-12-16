import { FETCH_INPUTS } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INPUTS:
    default:
      return state;
  }
}
