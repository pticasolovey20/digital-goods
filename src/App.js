import React from "react";

import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { GoodsPage } from "./pages/GoodsPage";
import { CartPage } from "./pages/CartPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Footer } from "./components/Footer";

export const App = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Header />
			<Container sx={{ flex: 1 }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/goods" element={<GoodsPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Routes>
			</Container>
			<Footer />
		</Box>
	);
};
