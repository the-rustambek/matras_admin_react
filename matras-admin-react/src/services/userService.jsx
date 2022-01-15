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

	static async MahsulotAdd(name,price,weight,size,guaranty,capasity,sale_price,description,isNew,status,id){
		let response = await fetch(constants.API_URL+"/v1/users/",{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				product_name: name,
				product_price: price,
				product_weight:weight,
				product_size: size,
				product_guaranty: guaranty,
				product_capasity: capasity,
				product_sale_price: sale_price,
				product_description: description,
				product_isNew: isNew,
				product_status: status,
			}),
		})
		let response = await fetch(constants.API_URL+"/v1/users/:product_id",{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				product_name: name,
				product_price: price,
				product_weight:weight,
				product_size: size,
				product_guaranty: guaranty,
				product_capasity: capasity,
				product_sale_price: sale_price,
				product_description: description,
				product_isNew: isNew,
				product_status: status,
			}),
		})
		response = await response.json();
		return response;
	}
}