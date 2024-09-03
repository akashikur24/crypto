import axios from "axios";

export const getCoinData = (id) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("API Limit expired");
    });
  if (myData) return myData;
  else return;
};
