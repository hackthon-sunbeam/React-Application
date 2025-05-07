import { useDispatch } from "react-redux";
import {
	removeItem
} from "../redux/cartSlice";

const ItemCard = ({ author, contents }) => {
	const dispatch = useDispatch();

	const handleDeleteClick = (e) => {
		dispatch(removeItem(author));
	};

	return (
		<div className="card d-inline-block m-2 p-2" style={{ width: "220px" }}>
			<h3 className="card-title">Author: {author}</h3>
			<p className="card-text">Quote: {contents}</p>
			{/* <button
				className="btn btn-warning font-monospace mx-1"
				onClick={handleIncrClick}
				style={{ width: "30px" }}
			>
				+
			</button>
			<button
				className="btn btn-warning font-monospace mx-1"
				onClick={handleDecrClick}
				style={{ width: "30px" }}
			>
				-
			</button> */}
			<button
				className="btn btn-danger font-monospace mx-1"
				onClick={handleDeleteClick}
				style={{ width: "30px" }}
			>
				X
			</button>
		</div>
	);
};

export default ItemCard;
