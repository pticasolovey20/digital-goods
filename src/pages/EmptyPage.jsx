import { Box, Container, Typography } from "@mui/material";
import empty from "../assets/empty.png";

export const EmptyPage = () => {
	return (
		<Container>
			<Box
				mt={20}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "30px",
				}}
			>
				<img
					src={empty}
					alt="empty"
					style={{ width: "300px", height: "300px" }}
				/>
				<Typography variant="h3">The cart is empty</Typography>
			</Box>
		</Container>
	);
};
