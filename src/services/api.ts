import axios from 'axios';

class Api {

    static getBotStats() {
        axios.get('http://150.136.137.28:7700/api/stats').then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
    }

}

export default Api;
