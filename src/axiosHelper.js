import axios from "axios";

const rootEndPoint = process.env.REACT_APP_ROOTAPI;

const userEndPoint = rootEndPoint + "/users";

export const postAdminUser = async (data) => {
  try {
    const resp = await axios.post(userEndPoint + "/admin-user", data);

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
