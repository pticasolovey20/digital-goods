import React from "react";

import { Box, Typography } from "@mui/material";
import { IconButtonComponent } from "./IconButtonComponent";

export const GoodsItem = ({ item, onClick, icon, added }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flexBasis: "250px",
				gap: "5px",
				padding: "10px",
				boxShadow: "5px 5px 15px #828282",
				borderRadius: "5px",
			}}
		>
			<img src={item.imgUrl} alt="item" />
			<Typography variant="h6" sx={{ fontSize: "18px" }}>
				{item.name}
			</Typography>
			<Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "cneter",
					}}
				>
					<Typography alignSelf="center">
						Price: {item.price} UAH
					</Typography>
					<Box sx={{ cursor: "pointer" }}>
						<IconButtonComponent
							icon={icon}
							onClick={() => onClick(item)}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
