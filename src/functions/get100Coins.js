import axios from "axios";

export const get100Coins = () => {
  const mydata = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("API TIME UP!");
    });
  if (mydata) return mydata;
  else return;
};
