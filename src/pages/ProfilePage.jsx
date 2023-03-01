import { useAuth } from "../hooks/useAuth";

import { Box, Container, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

export const ProfilePage = () => {
	const { isAuth } = useAuth();

	return (
		<Container sx={{ marginTop: "70px" }}>
			{isAuth ? (
				<Box>
					<Typography variant="h2" align="center">
						Welcome to your profile
					</Typography>
				</Box>
			) : (
				<Navigate to="/login" />
			)}
		</Container>
	);
};
