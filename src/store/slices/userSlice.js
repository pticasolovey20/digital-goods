import { createSlice } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const initialState = {
	email: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserAction(state, action) {
			state.email = action.payload;
		},

		removeUserAction(state) {
			state.email = "";
		},
	},
});

export const { setUserAction, removeUserAction } = userSlice.actions;

export const signInWithGoogle = () => async (dispatch) => {
	try {
		const { user } = await signInWithPopup(auth, provider);
		if (user) {
			dispatch(setUserAction({ email: user.email }));
		}
	} catch (error) {
		console.error(error);
	}
};

export default userSlice.reducer;
