import { ContextWrapper } from "../../react-global-context";

const initialState = {
  contextOne: ""
};

const types = {
  UPDATE: "UPDATE"
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.UPDATE:
      return {
        ...state,
        contextOne: "something"
      };

    default:
      return state;
  }
};

export default ContextWrapper("ContextOne", initialState, reducer, types);
