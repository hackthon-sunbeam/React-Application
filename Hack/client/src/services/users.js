import axios from "axios";
import { baseUrl } from "./apiconfig";

export async function userSignIn(email, password) {
	const url = `${baseUrl}/users/signin`;
	const reqbody = { email, password };
	const resp = await axios.post(url, reqbody);
	console.log(resp);
	if (resp.status !== 200)
		// check axios resp status (200 or else)
		throw new Error("Axios API call Error");
	// get axios resp data - result
	const result = resp.data;
	if (result.status !== "success")
		// if api status is not success ("error"), then get the message
		throw new Error(result.message);
	const data = result.data;
	return data;
}

export async function userSignUp(email, password, firstName, lastName, phoneno, address) {
	const url = `${baseUrl}/users/signup/register`;
	const reqbody = {firstName, lastName, email, phoneno, address, password };
	const resp = await axios.post(url, reqbody);
	console.log(resp);
	if (resp.status !== 200)
		// check axios resp status (200 or else)
		throw new Error("Axios API call Error");
	// get axios resp data - result
	const result = resp.data;
	if (result.status !== "success")
		// if api status is not success ("error"), then get the message
		throw new Error(result.message);
	const data = result.data;
	return data;
}
