import axios from "axios";

const rootEndPoint = process.env.REACT_APP_ROOTAPI;

const userEndPoint = rootEndPoint + "/users";

const getAccessJwt = () => {
  const token = sessionStorage.getItem("accessJwt");

  return token;
};

const axiosProcessor = async (obj) => {
  if (obj.isPrivate) {
    obj.headers = {
      Authorization: getAccessJwt(),
    };
  }

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
    isPrivate: true,
  });
};
