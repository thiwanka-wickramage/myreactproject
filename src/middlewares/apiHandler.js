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
};

export default apiHandler;
