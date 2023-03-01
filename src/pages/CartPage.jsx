import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAction } from "../store/slices/goodsSlice";
import { useAuth } from "../hooks/useAuth";

import { Container } from "@mui/material";
import { GoodsItem } from "../components/GoodsItem";
import { EmptyPage } from "./EmptyPage";
import { Navigate } from "react-router-dom";

export const CartPage = () => {
	const dispatch = useDispatch();

	const { cart } = useSelector((state) => state.goodsReducer);
	const { isAuth } = useAuth();

	const handleDelete = (item) => {
		dispatch(removeFromCartAction(item));
	};

	return (
		<Container
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: "34px",
				padding: "30px",
				marginTop: "65px",
			}}
		>
			{isAuth ? (
				cart.length > 0 ? (
					cart.map((item) => (
						<GoodsItem
							key={item.id}
							item={item}
							onClick={handleDelete}
							icon={"remove"}
						/>
					))
				) : (
					<EmptyPage />
				)
			) : (
				<Navigate to="/login" />
			)}
		</Container>
	);
};
