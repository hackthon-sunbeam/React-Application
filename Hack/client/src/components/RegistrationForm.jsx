import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { userSignUp } from "../services/users";

const RegistrationForm = () => {
	const [info, setInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		phoneno: "",
		address: "",
	});

	const navigate = useNavigate();
	const handleInputFieldChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleSignUpClick = async (e) => {
		try {
			// register user using REST api
			const user = await userSignUp(
				info.email,
				info.password,
				info.firstName,
				info.lastName,
				info.phoneno,
				info.address
			);
			toast.success("User registered with id: " + user.id);
			// then go to login page
			navigate("/login");
		} catch (err) {
			toast.error(err.message);
		}
	};

	return (
		<div className="col border border-2 shadow p-5 m-3">
			<div className="mb-3 text-center">
				<h2 className="fw-bolder">Registration Form</h2>
			</div>
			<div className="mb-3">
				<label className="form-label fw-bold">Email:</label>
				<input
					className="form-control"
					name="email"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label fw-bold">Password:</label>
				<input
					className="form-control"
					name="password"
					type="password"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label fw-bold">First Name:</label>
				<input
					className="form-control"
					name="firstName"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label fw-bold">Last Name:</label>
				<input
					className="form-control"
					name="lastName"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label fw-bold">Phone No:</label>
				<input
					className="form-control"
					name="phoneno"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label fw-bold">Address:</label>
				<input
					className="form-control"
					name="address"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="row">
				<button
					className="mx-3 col btn btn-primary mt-3 fw-bold"
					onClick={handleSignUpClick}
				>
					Sign Up
				</button>
				<Link className="mx-3 col btn btn-secondary mt-3 fw-bold" to="/login">
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default RegistrationForm;
