import { useEffect, useState } from "react";
import { getAllQuotes, getQuotesById } from "../services/quotes";
import { toast } from "react-toastify";
import QuoteCard from "./QuoteCard";
import { useLocation } from "react-router";


const UserDashboard = () => {

	const location = useLocation();
	const [quotes, setQuotes] = useState([]);

	async function loadQuotes() {
		try {
			// check if category is available (when come to this component from category list)
			if (location.state?.quotes) {
				// get data from rest api and store in component state
				const quotelist = await getQuotesById(location.state.quotes);
				setQuotes(quotelist);
			} else {
				// get data from rest api and store in component state
				const quotelist = await getAllQuotes();
				setQuotes(quotelist);
			}
		} catch (err) {
			console.log(err);
			toast.error(err.message);
		}
	}

	// call the helper fn when component is mounted
	useEffect(() => {
		loadQuotes();
	}, []);
	

	return (
		<div className="container">
			<h3 className="fw-bold fst-italic">All Quotes</h3>
			{quotes.map((q) => (
				<QuoteCard key={"quote" + q.id} quote={q} />
			))}
		</div>
	)
};

export default UserDashboard;
