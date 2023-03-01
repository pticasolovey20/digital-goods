import { Box, FormControl, TextField } from "@mui/material";

export const TextFieldComponent = ({ label, type, onChange, value }) => {
	return (
		<Box mb={3} width="100%">
			<FormControl fullWidth size="small">
				<TextField
					label={label}
					type={type}
					size="small"
					variant="outlined"
					onChange={onChange}
					value={value}
				/>
			</FormControl>
		</Box>
	);
};
