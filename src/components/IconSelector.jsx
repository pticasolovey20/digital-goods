import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import ClearIcon from "@mui/icons-material/Clear";

export const IconSelector = ({ icon }) => {
	switch (icon) {
		case "profile":
			return (
				<AccountCircleOutlinedIcon
					sx={{ height: "30px", width: "30px" }}
					htmlColor="white"
				/>
			);

		case "cart":
			return (
				<ShoppingCartOutlinedIcon
					sx={{ height: "30px", width: "30px" }}
					htmlColor="white"
				/>
			);

		case "login":
			return (
				<LoginOutlinedIcon
					sx={{ height: "30px", width: "30px" }}
					htmlColor="white"
				/>
			);

		case "sign out":
			return (
				<LogoutOutlinedIcon
					sx={{ height: "30px", width: "30px" }}
					htmlColor="white"
				/>
			);

		case "goods":
			return (
				<StorefrontOutlinedIcon
					sx={{ height: "30px", width: "30px" }}
					htmlColor="white"
				/>
			);

		case "home":
			return (
				<CottageOutlinedIcon
					sx={{ height: "30px", width: "30px" }}
					htmlColor="white"
				/>
			);

		case "plus":
			return (
				<AddOutlinedIcon
					sx={{
						height: "30px",
						width: "30px",
						border: "1px solid gray",
						borderRadius: "50%",
					}}
				/>
			);

		case "checked":
			return (
				<CheckCircleOutlinedIcon
					sx={{ height: "30px", width: "30px" }}
					htmlColor="green"
				/>
			);

		case "github":
			return <GitHubIcon htmlColor="white" />;

		case "google":
			return <GoogleIcon />;

		case "remove":
			return (
				<ClearIcon
					sx={{
						height: "30px",
						width: "30px",
						border: "1px solid gray",
						borderRadius: "50%",
					}}
				/>
			);

		default:
			return null;
	}
};
