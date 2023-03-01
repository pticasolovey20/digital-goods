import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserAction, signInWithGoogle } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

import { Container } from "@mui/material";
import { FormComponent } from "../components/FormComponent";
import { RedirectAuthButton } from "../components/RedirectAuthButton";

export const RegisterPage = () => {
	const [error, setError] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = async (event) => {
		event.preventDefault();
		const auth = getAuth();
		const email = event.target[0].value;
		const password = event.target[2].value;

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			dispatch(setUserAction({ email: user.email }));
			navigate("/");
		} catch (error) {
			if (error.code === "auth/invalid-email") {
				setError("Email is wrong");
			} else {
				setError("Unknown error");
			}
		}
	};

	const handleSignInWithGoogle = () => {
		dispatch(signInWithGoogle()).then(() => navigate("/"));
	};

	return (
		<Container
			maxWidth="xs"
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<FormComponent
				label="Sign Up"
				onSubmit={handleRegister}
				googleAuth={handleSignInWithGoogle}
				error={error}
			/>
			<RedirectAuthButton
				text="Do you have an account?"
				label="Login"
				route="/login"
			/>
		</Container>
	);
};
