import { useEffect, useState } from "react";
import { getAllQuotes, getQuotesById } from "../services/quotes";
import { toast } from "react-toastify";
import QuoteCard from "./QuoteCard";
import { useLocation } from "react-router";


const MyQuotes = () => {

	const location = useLocation();
	const [quotes, setQuotes] = useState([]);

    const handleMyQuotesClick = async (e) => {
            const quotelist = await getQuotesById(location.state.quotes);
            setQuotes(quotelist);
        };

	return (
		<div className="container" onLoad={handleMyQuotesClick}>
			<h3 className="fw-bold fst-italic">My Quotes</h3>
			{quotes.map((q) => (
				<QuoteCard key={"quote" + q.id} quote={q} />
			))}
		</div>
	)
};

export default MyQuotes;
