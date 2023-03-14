import Axios from "axios";
import config from "./config";

const defaultOptions = {
  headers: {},
};

class Api {
  _token: any;
  static instance: any;
  axiosInstance;
  set token(token: any) {
    this._token = token;
  }
  constructor() {
    this.axiosInstance = Axios.create({
      baseURL: config.baseURL,
      headers: config.headers,
    });
    this.axiosInstance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  static getInstance = () => {
    if (!Api.instance && !(Api.instance instanceof Api)) {
      Api.instance = new Api();
    }
    return Api.instance;
  };

  buildHeaders = (headersOption: any, localStorage_token: any) => {
    let headers;
    if (localStorage_token) {
      headers = {
        Authorization: `${config.tokenType} ${
          this._token || localStorage_token || ""
        }`,
        ...headersOption,
      };
    } else {
      headers = {
        ...headersOption,
      };
    }

    return headers;
  };

  axios = async (method: any, url: string, data: any, options: any) => {
    let localStorage_token = await localStorage.getItem("token");

    const { headers = {}, ...others } = options;
    const otherOptions =
      method === "GET" ? { params: data, ...others } : { data, ...others };
    return this.axiosInstance({
      method,
      url,
      headers: this.buildHeaders(headers, localStorage_token),
      ...otherOptions,
    });
  };
  handleSuccess = (response: any) => {
    if (response?.headers?.authorization) {
      localStorage.setItem(
        "token",
        response?.headers?.authorization?.split(" ")[1]
      );
    }
    return response;
  };

  handleError = (error: any) => {
    if (error.message === "Network Error") {
      // The user doesn't have internet
      return Promise.reject(error);
    }
    switch (error.response.status) {
      case 400:
        break;
      case 401:
        // window.location.href = "/login";
        break;
      case 403:
        // Go to login
        // window.location.href = "/login";
        break;
      case 404:
        // Show 404 page
        break;
      case 500:
        // Serveur Error redirect to 500
        break;
      default:
        // Unknow Error
        break;
    }
    return Promise.reject(error);
  };

  get = async (path: any, params: any, options = defaultOptions) => {
    return await this.axios("GET", path, params, options);
  };
  post = async (path: any, body: any, options = defaultOptions) => {
    return await this.axios("POST", path, body, options);
  };
  put = async (path: any, body: any, options = defaultOptions) => {
    return await this.axios("PUT", path, body, options);
  };
  delete = async (path: any, options = defaultOptions) => {
    return await this.axios("DELETE", path, undefined, options);
  };
}

export default Api.getInstance();
