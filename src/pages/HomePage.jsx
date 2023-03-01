import { Box, Container, Typography } from "@mui/material";

export const HomePage = () => {
	return (
		<Container sx={{ marginTop: "100px" }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
				}}
			>
				<Box sx={{ backgroundColor: "#ffde66", height: "300px" }}>
					<Typography fontSize={40}>BANNER #1</Typography>
				</Box>
				<Box sx={{ backgroundColor: "#b3ff66", height: "300px" }}>
					<Typography fontSize={40}>BANNER #2</Typography>
				</Box>
			</Box>
		</Container>
	);
};
