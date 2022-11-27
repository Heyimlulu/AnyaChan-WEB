import axios from 'axios';
import https from "https";

const instance = axios.create({
    httpAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

class Api {

    static getBotStats() {
        instance.get('http://150.136.137.28:7700/api/stats', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        }).then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
    }

}

export default Api;
