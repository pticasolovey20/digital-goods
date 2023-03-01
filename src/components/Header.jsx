import { useDispatch } from "react-redux";
import { removeUserAction } from "../store/slices/userSlice";
import { useAuth } from "../hooks/useAuth";

import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IconButtonComponent } from "./IconButtonComponent";

export const Header = () => {
	const dispatch = useDispatch();
	const { isAuth } = useAuth();

	const handleLogout = () => {
		dispatch(removeUserAction());
	};

	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar>
					<Box sx={{ display: "flex", flex: 1 }}>
						<Typography variant="h5">DIGITAL GOODS</Typography>
					</Box>
					<Box sx={{ display: "flex", gap: "10px" }}>
						<Link to="/">
							<IconButtonComponent icon="home" />
						</Link>
						<Link to="/goods">
							<IconButtonComponent icon="goods" />
						</Link>
						<Link to="/cart">
							<IconButtonComponent icon="cart" />
						</Link>
						<Link to="/profile">
							<IconButtonComponent icon="profile" />
						</Link>
						<Link to="/login">
							{isAuth ? (
								<IconButtonComponent
									icon="sign out"
									onClick={handleLogout}
								/>
							) : (
								<IconButtonComponent icon="login" />
							)}
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
