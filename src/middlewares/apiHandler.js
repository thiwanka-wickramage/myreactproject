import axios from "axios";
import envConfig from "../configs";

const { domains } = envConfig.api;

const apiHandler = {
  getAssets: () => {
    console.log("env config >>>>>>>>>>>> ", envConfig);
    return axios.get(`${domains.assetsManagement}/users`, {
      headers: "",
    });
  },
  doLogin: data => {
    const { payload } = data;
    console.log('axio')
    return axios.post(
        `https://reqres.in/api/login`,
        {
          ...payload
        },
        { skipAuthRefresh: true }
    );
  },
};

export default apiHandler;
