import { ContextWrapper } from "../../react-global-context";

const initialState = {
  name: ""
};

const types = {
  UPDATE: "UPDATE"
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.UPDATE:
      return {
        ...state,
        name: "something"
      };

    default:
      return state;
  }
};

export default ContextWrapper("ContextTwo", initialState, reducer, types);
