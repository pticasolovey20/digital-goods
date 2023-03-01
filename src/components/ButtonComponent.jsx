import { Button } from "@mui/material";

export const ButtonComponent = ({ label, variant, onClick }) => {
	return (
		<Button
			sx={{
				fontSize: 20,
				letterSpacing: 1,
				color: "#fff",
				padding: "5px 10px",
			}}
			variant={variant}
			color="inherit"
			onClick={onClick}
		>
			{label}
		</Button>
	);
};
