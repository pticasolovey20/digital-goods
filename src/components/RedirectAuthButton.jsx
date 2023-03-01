import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const RedirectAuthButton = ({ text, label, route }) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography>{text}</Typography>
			<Link to={route}>
				<Button color="primary" sx={{ fontWeight: "600" }}>
					{label}
				</Button>
			</Link>
		</Box>
	);
};
