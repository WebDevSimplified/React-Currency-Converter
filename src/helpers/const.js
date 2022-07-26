/*
    Export all constants from here
*/

// Currency conversion provider base url
const currencyUrl = "https://api.exchangeratesapi.io/latest";

// Default context state
const defaultState = {
    loading: true,
    currencies: ["USD", "EUR"]
};

export {
    currencyUrl,
    defaultState
};