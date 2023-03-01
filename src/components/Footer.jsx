import { Box, Link } from "@mui/material";
import { IconSelector } from "../components/IconSelector";

export const Footer = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "50px",
				padding: "10px",
				backgroundColor: "#1976d2",
			}}
		>
			<Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<IconSelector icon="github" />
				<Link
					href="https://github.com/pticasolovey20"
					target="_blank"
					underline="none"
					color="#fff"
					fontSize="22px"
				>
					VISIT MY GITHUB
				</Link>
			</Box>
		</Box>
	);
};
