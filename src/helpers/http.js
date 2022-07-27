import { get as apiGet } from "axios";
import { currencyUrl, headers } from "helpers/const";

/*
    For API calls with axios
*/

const http = {
    // Get request
    get: (endpoint) => new Promise((resolve, reject) => {
        setTimeout(() => {
            apiGet(`${currencyUrl}/${endpoint}`, { headers })
                .then(({ data }) => {
                    if (data.status === 0)
                        throw data.caption;
                    else resolve(data.payload);
                })
                .catch((e) => reject(e));
        }, 1000)
    }),
};

export default http;