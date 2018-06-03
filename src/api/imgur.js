import qs from "qs";
import axios from "axios";

const CLIENT_ID = "e7e860c556893de";
const ROOT_URL = "https://api.imgur.com";
// const = "f75b7b1ebf8ad9d0210b94446bbba3f60bc0c5ca";
export default {
  login(){
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token"
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/accounts/me/image`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};
