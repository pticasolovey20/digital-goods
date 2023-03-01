import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCartAction,
	fetchGoods,
	sortByHighPriceAction,
	sortByLowPriceAction,
} from "../store/slices/goodsSlice";
import { useAuth } from "../hooks/useAuth";
import { categoryOptions } from "../data/categories";

import { Container } from "@mui/material";
import { GoodsItem } from "../components/GoodsItem";
import { ModalComponent } from "../components/ModalComponent";
import { SelectField } from "../components/SelectField";
import { LoadingPage } from "./LoadingPage";

export const GoodsPage = () => {
	const [openModal, setOpenModal] = useState(false);
	const [value, setValue] = useState("");

	const dispatch = useDispatch();

	const { goods, loading } = useSelector((state) => state.goodsReducer);
	const { isAuth } = useAuth();

	useEffect(() => {
		dispatch(fetchGoods());
	}, [dispatch]);

	const handleAddToCart = (item) => {
		if (isAuth) {
			dispatch(addToCartAction(item));
		} else {
			setOpenModal(true);
		}
	};

	const closeModal = () => setOpenModal(false);

	const handleChange = (event) => {
		setValue(event.target.value);
		const inputValue = event.target.value;
		if (inputValue === "highcost") {
			dispatch(sortByHighPriceAction());
		} else {
			dispatch(sortByLowPriceAction());
		}
	};

	if (loading) {
		return <LoadingPage />;
	}

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
			<SelectField
				options={categoryOptions}
				value={value}
				onChange={(event) => handleChange(event)}
			/>
			{goods.length > 0 &&
				goods.map((item) => (
					<GoodsItem
						key={item.id}
						item={item}
						onClick={handleAddToCart}
						icon={"plus"}
					/>
				))}
			{openModal && (
				<ModalComponent open={openModal} onClose={closeModal} />
			)}
		</Container>
	);
};
