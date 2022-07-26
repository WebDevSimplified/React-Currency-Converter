/*
    Export all constants from here
*/

// Currency conversion provider base url
const currencyUrl = "https://api.exchangeratesapi.io/latest";

// Default context state
const defaultState = {
    loading: false,
    currencies: ["USD", "EUR"],
    curr1: "USD",
    curr2: "EUR",
    value1: 1,
    value2: 1
};

export {
    currencyUrl,
    defaultState
};