import axios from "axios";

const api = axios.create({
  baseURL:
    "  https://v6.exchangerate-api.com/v6/53f82544a287e784406d91f4",
});

// we need to create a get request

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
