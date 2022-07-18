import axios from './axios';

class MailService {

    MAIL_URL = '/sendmail';
    
    sendEmail() {
        return axios.get(
            this.MAIL_URL,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }
}

export default new MailService();


// documentation found here: https://www.npmjs.com/package/axios