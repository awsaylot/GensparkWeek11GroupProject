import axios from "axios";

class UserService {

    instance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers: {
            "Content-type": "application/json"
        }
    });

    getAllUsers() {
        return axios({
            method: 'get',
            url: `api/users/${user_id}`,
            headers: {
                Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    getUserById(user_id) {
        return axios({
            method: 'get',
            url: `api/users/${user_id}`,
            headers: {
                Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    createUser(sign_in_type, name, username, password, email, phone) {
        return axios({
            method: 'post',
            url: `api/users`,
            headers: {
                Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            },
            data: {
                "sign_in_type": sign_in_type,
                "name": name,
                "username": username,
                "password": password,
                "email": email,
                "phone": phone
            }
        });
    }

    updateUser(user) {
        return axios({
            method: 'put',
            url: `api/users`,
            headers: {
                Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            },
            data: {
                "user_id": user.user_id,
                "sign_in_type": user.sign_in_type,
                "name": user.name,
                "username": user.username,
                "password": user.password,
                "email": user.email,
                "phone": user.phone
            }
        });
    }

    deleteUserById(user_id) {
        return axios({
            method: 'delete',
            url: `api/users/${user_id}`,
            headers: {
                Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}


// documentation found here: https://www.npmjs.com/package/axios