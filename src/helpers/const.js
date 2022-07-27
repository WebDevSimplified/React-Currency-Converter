/*
    Export all constants from here
*/

// Currency conversion provider base url
const currencyUrl = process.env.REACT_APP_BASEURL;

// Default context state
const defaultState = {
    loading: true,
    currencies: ["EUR", "MGA"],
    curr1: "EUR",
    curr2: "MGA",
    value1: 1,
    value2: 4200
};

// Axios request headers
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
};

export {
    currencyUrl,
    defaultState,
    headers
};