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
      },
    );
    return response.data;
  },

  createUser: async (data: {
    name: string;
    email: string;
    ra?: string;
    role: string;
    course?: string;
    year?: number;
    organization?: string;
  }) => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await userMss.post(
      "/create-user",
      { new_user: data },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
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

  uploadUsers: async (file: File) => {
    const file_base64 = await convertToBase64(file);

    const accessToken = localStorage.getItem("accessToken");
    const response = await userMss.post(
      "/upload-users",
      { file_base64: file_base64 },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data;
  },

  //A partir daq é meu:

  updateUser: async (data: {
    user_id: string;
    name?: string;
    email?: string;
    ra?: string;
    role?: string;
    state?: string;
    course?: string;
    year?: number;
    organization?: string;
    active?: string;
  }) => {
    const accessToken = localStorage.getItem("accessToken");

    const response = await userMss.put("/update-user", data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  },

  deleteUser: async (user_id: string) => {
    const accessToken = localStorage.getItem("accessToken");

    const response = await userMss.delete("/delete-user", {
      params: { user_id },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  },

  exportUsers: async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await userMss.get("/export-users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },
};
