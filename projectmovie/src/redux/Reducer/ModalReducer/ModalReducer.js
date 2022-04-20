const component = {
  Component: <p>Default</p>,
  handleForm: () => {},
};

export const ModalReducer = (state = component, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      state.Component = action.Component;
      state.handleForm = action.handleForm;

      return { ...state };

    default:
      return { ...state };
  }
};
