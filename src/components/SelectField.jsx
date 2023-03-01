import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectField = ({ options, value, onChange }) => {
	return (
		<Box mb={3} width="100%" textAlign="start">
			<FormControl size="small" fullWidth>
				<InputLabel>Category</InputLabel>
				<Select value={value} label="Category" onChange={onChange}>
					{options.map((option) => (
						<MenuItem value={option.id} key={option.id}>
							{option.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};
