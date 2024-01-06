import { getUser } from "../../axiosHelper";

export const getUserAction = async () => {
  const { status, message, user } = await getUser();

  if (status === "success") {
    // get the user info and redirect to dashboard

    console.log(user);
  }
};
