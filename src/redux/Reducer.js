import { FETCH_USERS, ADD_USER } from "./ActionsTypes";
const initialState = {
  loading: false,
  users: [],
  error: "err",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        loading: true,
        users: action.payload,
        error: "",
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users.concat({ ...action.payload, id: Date.now() })],
      };

    default:
      return state;
  }
};

export default reducer;
