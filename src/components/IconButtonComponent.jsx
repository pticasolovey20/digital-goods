import { IconButton } from "@mui/material";
import { IconSelector } from "./IconSelector";

export const IconButtonComponent = ({ icon, onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<IconSelector icon={icon} />
		</IconButton>
	);
};
