import axios from "axios";

class MailService {

    instance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers: {
            "Content-type": "application/json"
        }
    });
    
    sendEmail() {
        return axios({
            method: 'get',
            url: `api/sendmail`,
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