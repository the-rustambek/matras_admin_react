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

	// static async MahsulotAdd(mahsulot_nomi,mahsulot_price,mahsulot_weight,mahsulot_size,mahsulot_guaranty,mahsulot_capasity,mahsulot_sale_price,mahsulot_description,mahsulot_isNew,mahsulot_status,id){

	// 	let token = window.localStorage.getItem("token");

	// 	let response = await fetch(constants.API_URL+"/v1/products/",{
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Authorization": token
	// 		},
	// 		body: JSON.stringify({

	// 			product_name: mahsulot_nomi,
	// 			product_price: mahsulot_price,
	// 			product_weight:mahsulot_weight,
	// 			product_size: mahsulot_size,
	// 			product_guaranty:mahsulot_guaranty,
	// 			product_capasity: mahsulot_capasity,
	// 			product_sale_price: mahsulot_sale_price,
	// 			product_description: mahsulot_description,
	// 			product_isNew: mahsulot_isNew,
	// 			product_status: mahsulot_status,
	// 			category_id: id
	// 		}),
	// 	})
	// 	response = await response.json();
	// 	return response;
	
		
	// }
	// static async MahsulotDelete(mahsulot_nomi,mahsulot_price,mahsulot_weight,mahsulot_size,mahsulot_guaranty,mahsulot_capasity,mahsulot_sale_price,mahsulot_description,mahsulot_isNew,mahsulot_status,id){

	// 	let token = window.localStorage.getItem("token");

	// 	let response = await fetch(constants.API_URL+"/v1/products/:product_id",{
	// 		method: "DELETE",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Authorization": token
	// 		},
	// 		body: JSON.stringify({

	// 			product_name: mahsulot_nomi,
	// 			product_price: mahsulot_price,
	// 			product_weight:mahsulot_weight,
	// 			product_size: mahsulot_size,
	// 			product_guaranty:mahsulot_guaranty,
	// 			product_capasity: mahsulot_capasity,
	// 			product_sale_price: mahsulot_sale_price,
	// 			product_description: mahsulot_description,
	// 			product_isNew: mahsulot_isNew,
	// 			product_status: mahsulot_status,
	// 			category_id: id
	// 		}),
	// 	})
	// 	response = await response.json();
	// 	return response;
	// }
	// static async MahsulotUpdate(mahsulot_nomi,mahsulot_price,mahsulot_weight,mahsulot_size,mahsulot_guaranty,mahsulot_capasity,mahsulot_sale_price,mahsulot_description,mahsulot_isNew,mahsulot_status,id){


	// 	let token = window.localStorage.getItem("token");

	// 	let response = await fetch(constants.API_URL+"/v1/products/:product_id",{
	// 		method: "PUT",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Authorization": token
	// 		},
	// 		body: JSON.stringify({

	// 			product_name: mahsulot_nomi,
	// 			product_price: mahsulot_price,
	// 			product_weight:mahsulot_weight,
	// 			product_size: mahsulot_size,
	// 			product_guaranty:mahsulot_guaranty,
	// 			product_capasity: mahsulot_capasity,
	// 			product_sale_price: mahsulot_sale_price,
	// 			product_description: mahsulot_description,
	// 			product_isNew: mahsulot_isNew,
	// 			product_status: mahsulot_status,
	// 			category_id: id
	// 		}),
	// 	})
	// 	response = await response.json();
	// 	return response;
	// }


}


