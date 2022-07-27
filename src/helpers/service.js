import http from "helpers/http";
/*
    Here are all the methods for communicating with currency REST API
*/

// Gets all currencies list
const getCurrencies = () => http.get("list");

// Converts currency
const convertCurrency = (from, to) => http.get(`convert/${from}/${to}`);

export {
    getCurrencies,
    convertCurrency
};