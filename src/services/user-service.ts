import { userMss } from "../http/api";
import convertToBase64 from "../utils/file-utils";

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
    }
    );
    return response.data;
  },

  uploadUsers: async (file: File) => {

    const file_base64 = await convertToBase64(file);

    const accessToken = localStorage.getItem("accessToken");
    const response = await userMss.post("/upload-users", 
      {file_base64: file_base64},
      {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    return response.data;
  },
};
