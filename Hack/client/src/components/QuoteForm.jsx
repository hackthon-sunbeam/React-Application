import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addQuote } from "../services/quotes";

const QuoteForm = () => {
	
    const [info, setInfo] = useState({
		author: "",
		contents: "",
	});

    const navigate = useNavigate();
	const handleInputFieldChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });


    const handleAddQuoteClick = async (e) => {
        try {
            // register user using REST api
            const user = await addQuote(
                info.author,
                info.contents,
                );
                toast.success("Quote registered with id: " + user.id);
                // then go to login page
                navigate("/user");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="col border border-2 shadow p-5 m-3">
            <div className="mb-3 text-center">
                <h2 className="fw-bolder">Quote Form</h2>
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Author:</label>
                <input
                    className="form-control"
                    name="author"
                    type="text"
                    onChange={handleInputFieldChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Contents:</label>
                <input
                    className="form-control"
                    name="contents"
                    type="text"
                    onChange={handleInputFieldChange}
                />
            </div>
            <div className="row">
                <button
                    className="mx-3 col btn btn-primary mt-3 fw-bold"
                    onClick={handleAddQuoteClick}
                >
                    Add Quote
                </button>
                <Link className="mx-3 col btn btn-secondary mt-3 fw-bold" to="/user">
                    My Quotes
                </Link>
            </div>
        </div>
    );

}


export default QuoteForm;