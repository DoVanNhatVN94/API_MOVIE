import Login from "../../../page/Login/Login"

const component = {
  Component: <p>Hello</p>,
  id: "",
};

export const ModalReducer = (state = component, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      state.Component = action.Component;
      state.id = action.id;

      return { ...state };

    default:
      return { ...state };
  }
};
