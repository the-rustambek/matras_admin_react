

import axios from "axios";

let token = window.localStorage.getItem("token");
const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }

export default axios.create({
    
    API_URL:"http://localhost:8080",
    headers: headers
  
}
);