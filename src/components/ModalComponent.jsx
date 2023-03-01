import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ModalComponent = ({ open, onClose }) => {
	return (
		<Box sx={{ height: "500px" }}>
			<Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
				<DialogContent
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<DialogContentText
						fontSize="20px"
						align="center"
						sx={{ color: "black" }}
					>
						To add an item to your cart, you need to
					</DialogContentText>
					<Link to="/login">
						<Button
							color="primary"
							sx={{
								fontWeight: "600",
								fontSize: "20px",
							}}
						>
							LOG IN
						</Button>
					</Link>
				</DialogContent>
			</Dialog>
		</Box>
	);
};
