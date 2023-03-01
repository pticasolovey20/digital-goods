import { useSelector } from "react-redux";

export const useAuth = () => {
	const { email } = useSelector((state) => state.userReducer);

	return {
		isAuth: !!email,
		email,
	};
};
