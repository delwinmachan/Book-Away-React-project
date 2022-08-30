import axios from "axios";
/**
 * base url of api being declared
 */
const instance = axios.create({
  baseURL: "http://fake-hotel-api.herokuapp.com/api/hotels",
});

export default instance;
