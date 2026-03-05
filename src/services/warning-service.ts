import { userMss } from "../http/api";

export type Role = "USER" | "PRESIDENT" | "ADM" | string;
export type ORG = "NAWAT" | "DEV" | "ESPORTS" | "META" | "GUARDIAN" | string;

export interface CreateWarning {
  title: string;
  expire: number;
  description: string;
  target_role: Role;
  target_org: ORG;
}

export const WarningService = {
  createWarning: async (data: CreateWarning) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await userMss.post(
        "/create-warning",
        {
          new_warning: data,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao criar aviso:", error);
      throw error;
    }
  },
  getAllWarnings: async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await userMss.get("/get-all-warnings", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar todos os avisos:", error);
      throw error;
    }
  },

  getWarning: async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await userMss.get("/get-warnings", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar avisos:", error);
      throw error;
    }
  },

  deleteWarning: async (warning_id: string) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await userMss.delete(
        `/delete-warning?warning_id=${warning_id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar aviso:", error);
      throw error;
    }
  },
};
