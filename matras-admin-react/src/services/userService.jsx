import constants from "../configs/constants";

export default class UserService {
	// static async CreateUserAccount(name, email, password, gender, country_id) {
	// 	let response = await fetch(constants.API_URL + "/v1/users/account", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			user_name: name,
	// 			user_email: email,
	// 			user_password: password,
	// 			user_gender: gender,
	// 			country_id,
	// 		}),
	// 	});
	// 	response = await response.json();
	// 	return response;
	// }

	static async LoginAccount(login, password) {
		
		let response = await fetch(constants.API_URL + "/v1/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user_login: login,
				user_password: password,
			}),
		});
// console.log(response)
		response = await response.json();
		return response;
	}
}