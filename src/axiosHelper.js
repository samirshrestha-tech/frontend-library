import axios from "axios";

const rootEndPoint = process.env.REACT_APP_ROOTAPI;

const userEndPoint = rootEndPoint + "/users";

const getAccessJwt = () => {
  return sessionStorage.getItem("AccessJwt");
};

const axiosProcessor = async (obj) => {
  try {
    const resp = await axios(obj, {
      headers: {
        Authorization: getAccessJwt(),
      },
    });
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

// user api callss

export const loginUser = async (data) => {
  return axiosProcessor({
    method: "post",
    url: userEndPoint + "/login",
    data,
  });
};

export const getUser = async () => {
  return axiosProcessor({
    method: "get",
    url: userEndPoint,
  });
};
