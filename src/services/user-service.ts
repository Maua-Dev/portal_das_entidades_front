import { userMss } from "../http/api";

export const UserService = {
  authUser: async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await userMss.post(
      "/auth-user",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  },

  getAllUsers: async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await userMss.get("/get-all-users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },
  getUser: async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await userMss.get("/get-user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },
};
