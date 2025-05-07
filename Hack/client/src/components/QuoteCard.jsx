import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const QuoteCard = (props) => {
	const { author, contents } = props.quote;
	const dispatch = useDispatch();
	const handleAddFavouriteClick = (e) => {
		const addItemAction = addItem(author); // send item id in payload (from props)
		dispatch(addItemAction);
	};
	return (
		<div className="card row d-inline-block m-2 p-2" style={{ width: "220px" }}>
			<h3 className="card-title">{author}</h3>
			<p className="card-text">
				A {contents}.
			</p>
			<button className="btn btn-primary" onClick={handleAddFavouriteClick}>
				Add Favourite
			</button>
		</div>
	);
};

export default QuoteCard;
