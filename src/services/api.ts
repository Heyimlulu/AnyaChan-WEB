import axios from 'axios';

export default class Api {

    static getBotStats() {
        axios.get('https://top.gg/api/bots/735858911093063773/stats', {
            headers: {
                'Authorization': `${import.meta.env.VITE_TOPGG_AUTH_TOKEN}`
            }
        }).then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
    }

}