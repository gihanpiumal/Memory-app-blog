import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
} from "../../config/LocalStorage";

// import { $Message } from "../../components/antd";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

const baseURL = "http://localhost:8081/api";

// export const getData = (url, obj) => axios.get(baseURL+ url, obj);


export const getData = async (url, parm) => {let response;
    await instance({
      method: "GET",
      url: url,
      params: parm,
      headers: { "x-access-token": getAccessToken() },
    })
      .then((res) => {
        response = res.data;
      })
      .catch(async (err) => {
        let errorObj = await setError(err);

        response = { data: errorObj.data, reCall: errorObj.reCall };
      });
    return response;}

export const postData = (url, obj) => axios.post(baseURL + url, obj);

export const putData = (url, obj) => axios.put(baseURL + url, obj);

export const deleteData = (url) => axios.delete(baseURL + url);


async function setError(error) {
    if (!error.response) {
      // network error
      console.log("error at start");
    //   $Message.error("Network Error");
    } else {
      const originalRequest = error.config;
  
      if (error.response.data) {
        if (error.response.data.message != "Failed to authenticate token.") {
        //   $Message.error(error.response.data.message);
          let reCall = false,
            data = null;
          console.log(error.response.data.message);
          return { data: data, reCall: reCall };
        }
      } else {
        console.log("error at error.response.statusText");
        // $Message.error(error.response.statusText);
      }
      if (error.response.status === 403) {
        console.log("error because not authorized");
        // $Message.error("Not Authorized");
      }
      if (error.response.status === 401 && !getAccessToken()) {
        let reCall = false,
          data = null;
        console.log("error because token not available");
        return { data: data, reCall: reCall };
      }
      if (
        getRefreshToken() &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        let reCall = false,
          data = null;
        await instance({
          method: "GET",
          url: "/employee/get_token",
          headers: { "x-access-token": getRefreshToken() },
        })
          .then(async (res) => {
            if (res.status === 200) {
              setAccessToken(res.data.token);
              originalRequest.headers["x-access-token"] = res.data.token;
              data = await axios(originalRequest);
            }
          })
          .catch(async (err) => {
            removeAccessToken();
            removeRefreshToken();
            window.history.push("/login");
          });
        return { data: data, reCall: reCall };
      }
    }
  }