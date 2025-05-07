import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: { items: [] },
	reducers: {
		addItem: (state, action) => {
			// payload = new item id
			const itemsInFavourite = state.items.filter(
				(item) => item.itemid === action.payload
			);
			if (itemsInFavourite.length === 0) {
				const item = { itemid: action.payload, quantity: action.contents };
				state.items.push(item);
			} else {
				const item = itemsInFavourite[0];
				item.quantity += 1;
			}
		},
		removeItem: (state, action) => {
			// payload = item id to be deleted
			state.items = state.items.filter(
				(item) => item.itemid !== action.payload
			);
		},
	},
});

export const { addItem, removeItem} =
	cartSlice.actions;
export default cartSlice.reducer;
