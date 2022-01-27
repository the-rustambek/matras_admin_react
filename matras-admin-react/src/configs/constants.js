
let token = window.localStorage.getItem("token");
const constants = {
  
	API_URL: "http://192.168.203.27:8080",
  headers:{
    'Content-Type': 'application/json',
    'Authorization': token

  }
};

export default constants;



// import axios from "axios";

// let token = window.localStorage.getItem("token");
// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': token
//   }

// export default axios.create({

//     API_URL:"http://localhost:8080",
//     headers: headers

// }
// );