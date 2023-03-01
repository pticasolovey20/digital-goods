import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGoods = createAsyncThunk(
	"goods/fetchGoods",
	async (param, thunkAPI) => {
		try {
			const url = `https://63891094d94a7e5040ad939a.mockapi.io/goods`;
			const { data } = await axios.get(url);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const initialState = {
	goods: [],
	cart: [],
	loading: false,
	error: "",
};

const goodsSlice = createSlice({
	name: "goods",
	initialState,
	reducers: {
		addToCartAction: (state, action) => {
			const itemToAdd = action.payload;
			if (state.cart.some((item) => item.id === itemToAdd.id)) {
				return state;
			} else {
				return {
					...state,
					cart: [...state.cart, itemToAdd],
				};
			}
		},

		removeFromCartAction: (state, action) => {
			const itemToRemove = action.payload;
			state.cart = state.cart.filter(
				(item) => item.id !== itemToRemove.id
			);
		},

		sortByHighPriceAction: (state) => {
			state.goods = state.goods.slice().sort((a, b) => b.price - a.price);
		},

		sortByLowPriceAction: (state) => {
			state.goods = state.goods.slice().sort((a, b) => a.price - b.price);
		},
	},
	extraReducers: {
		[fetchGoods.pending.type]: (state) => {
			state.loading = true;
		},

		[fetchGoods.fulfilled.type]: (state, action) => {
			state.loading = false;

			state.goods = action.payload;
			state.error = "";
		},

		[fetchGoods.rejected.type]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	addToCartAction,
	removeFromCartAction,
	sortByHighPriceAction,
	sortByLowPriceAction,
} = goodsSlice.actions;

export default goodsSlice.reducer;
