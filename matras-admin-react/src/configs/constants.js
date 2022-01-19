
let token = window.localStorage.getItem("token");
const constants = {
  
	API_URL: "http://localhost:8080",
  headers:{
    'Content-Type': 'application/json',
    'Authorization': token

  }
};

export default constants;