export default function authHeader() {
    const username = JSON.parse(localStorage.getItem("username"));

    if(username && username.auth-token){
        return {
            "x-auth-token": username.auth-token
        };
    }else{
        return{};
    }
}