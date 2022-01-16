import constants from "../configs/constants";

export default class SelectService { 
	static async CategoryAdd(){
        let token = window.localStorage.getItem("token")

		let response = await fetch(constants.API_URL+"/v1/categories",{
			method: "GET", 
			headers: {
				"Content-Type": "application/json",
                "Authorization": token
			}
		})

        // console.log(response);
		response = await response.json();
		return response;
	}

}


