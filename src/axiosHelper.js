import axios from "axios";

const rootEndPoint = process.env.REACT_APP_ROOTAPI;

const userEndPoint = rootEndPoint + "/users";

const axiosProcessor = async (obj) => {
  try {
    const resp = await axios(obj);
    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const postAdminUser = async (data) => {
  return axiosProcessor({
    method: "post",
    url: userEndPoint + "/admin-user",
    data,
  });
};

export const loginUser = async (data) => {
  return axiosProcessor({
    method: "post",
    url: userEndPoint + "/login",
    data,
  });
};
