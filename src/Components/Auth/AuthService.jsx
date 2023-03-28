import axios from "axios";

const API_URL = "http://localhost:3000/";

const login = (username, password) => {
    return axios.post(API_URL + "login/user", {
        username, 
        password,
        headers : {
            'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ1c2VyIiwiaWF0IjoxNjc4NjkxMjY1fQ.db77MdKBk9J0-C0roE7WVPOQUrG9Eb43pS_dsgEg-iE"
          }
    })
    .then((response) => {
        if(response.data.auth-token){
            localStorage.setItem("username", JSON.stringify(response.data));
        }
        return response.data;
    })
}
const AuthService = {
    login
}
export default AuthService