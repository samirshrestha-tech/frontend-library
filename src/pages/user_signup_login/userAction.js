import { getUser } from "../../axiosHelper";
import { setUser } from "./userSlice";

export const getUserAction = () => async (dispatch) => {
  const { status, message, user } = await getUser();

  if (status === "success") {
    // get the user info and redirect to dashboard
    dispatch(setUser(user));
    console.log(user);
  }
};
