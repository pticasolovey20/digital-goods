import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserAction, signInWithGoogle } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

import { Container } from "@mui/material";
import { FormComponent } from "../components/FormComponent";
import { RedirectAuthButton } from "../components/RedirectAuthButton";

export const LoginPage = () => {
	const [error, setError] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (event) => {
		event.preventDefault();
		const auth = getAuth();
		const email = event.target[0].value;
		const password = event.target[2].value;

		if (email && password) {
			signInWithEmailAndPassword(auth, email, password)
				.then(({ user }) => {
					dispatch(setUserAction({ email: user.email }));
					navigate("/");
				})
				.catch((error) => {
					switch (error.code) {
						case "auth/invalid-email":
							return setError("Email is wrong");

						case "auth/wrong-password":
							return setError("Password is wrong");

						case "auth/user-not-found":
							return setError("User not found");

						default:
							return setError("Unknown error");
					}
				});
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
				label="Log In"
				onSubmit={handleLogin}
				googleAuth={handleSignInWithGoogle}
				error={error}
			/>
			<RedirectAuthButton
				text="You don't have an account?"
				label="Register"
				route="/register"
			/>
		</Container>
	);
};
