import { Box, Button, Typography } from "@mui/material";
import { TextFieldComponent } from "./TextFieldComponent";
import { IconSelector } from "../components/IconSelector";

export const FormComponent = ({ label, onSubmit, googleAuth, error }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			<form onSubmit={onSubmit}>
				<TextFieldComponent label="Email" type="text" />
				<TextFieldComponent label="Password" type="password" />
				{error && (
					<Typography
						variant="body2"
						color="error"
						sx={{
							fontSize: "18px",
							textAlign: "center",
							marginBottom: "8px",
						}}
					>
						{error}
					</Typography>
				)}
				<Button fullWidth variant="contained" type="submit">
					{label}
				</Button>
			</form>
			<Button
				fullWidth
				variant="outlined"
				color="primary"
				sx={{ fontWeight: "600" }}
				onClick={googleAuth}
			>
				<IconSelector icon="google" />
				OOGLE
			</Button>
		</Box>
	);
};
