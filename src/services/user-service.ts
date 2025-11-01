import { userMss } from "../http/api";

export const UserService = {
  authUser: async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await userMss.post("/auth-user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },
};
