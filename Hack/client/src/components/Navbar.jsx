import React from "react";
import { Link, useNavigate } from "react-router";

function Navbar() {
	const navigate = useNavigate();
	// const { user } = useContext(AuthContext);

	// const handleMyQuotesClick = (e) => {
	// 	const userId = user.id;
	// 	navigate("/user", {
	// 		state: {
	// 			id: userId,
	// 		}
	// 	})
	// }

	const onLogout = (e) => {
		console.log("Logout clicked!");
		navigate("/"); // Home component (path = /)
	};

	return (
		<nav className="navbar navbar-expand-md bg-light" data-bs-theme="light">
			<div className="container-fluid">
				<Link className="navbar-brand fw-bolder fst-italic" to="/user/">
					LifeLessons
				</Link>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link fw-bold" to="/user">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link fw-bold" to="/user/quotes">
								MyQuotes
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link fw-bold" to="/user/update">
								Profile
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link fw-bold" to="/user/favourites">
								Favourites
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link fw-bold" to="/user/addquotes">
								Add Quotes
							</Link>
						</li>
						<li className="nav-item">
							<button onClick={onLogout} className="btn btn-warning fw-bold link">
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
