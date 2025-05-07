import { useSelector } from "react-redux";
import store from "../redux/store";
import ItemCard from "./ItemCard";

const Favourites = () => {
	//const state = store.getState();
	//console.log(state);
	const cartItems = useSelector((storeState) => storeState.cart.items);
	console.log("Fav ITEMS:", cartItems);
	return (
		<div>
			<h1>Favourites</h1>
			{cartItems.map((item) => (
				<ItemCard
					key={item.itemid}
					itemid={item.itemid}
					quantity={item.quantity}
				/>
			))}
			<br />
			{/* <button className="btn btn-primary">Place Order</button> */}
		</div>
	);
};

export default Favourites;
