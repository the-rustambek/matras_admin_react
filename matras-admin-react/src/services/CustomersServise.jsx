import constants from "../configs/constants";

export default class CustomerServise { 
	static async GetCustomers(){
        let token = window.localStorage.getItem("token")

		let response = await fetch(constants.API_URL+"/v1/customers",{
			method: "GET", 
			headers: {
				"Content-Type": "application/json",
                "Authorization": token
			}
		})
 
		response = await response.json();
        // console.log(response);
		return response;
	} 
}


