import instance from "./config";

export const authData = (user) => {
    // const data = JSON.stringify(user)
    return instance.post(`/login`, user)
}


 