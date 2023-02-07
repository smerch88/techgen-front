export const signInAction = (state, action) => {
  state.currentUser = action.payload;
};

export const signOutAction = state => (state.currentUser = null);
