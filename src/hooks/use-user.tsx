import { UserService } from "../services/user-service";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

export function useAuthUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await UserService.authUser();
      return response;
    },
    retry: 2,
  });
}

export function useAllUsers() {
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const response = await UserService.getAllUsers();
      return response;
    },
    retry: 2,
  });
}

export function useUser() {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const response = await UserService.getUser();
      return response
    },
    retry: 2,
  });
}

export function useUploadUsers() {
  return useMutation({
    mutationFn: async (file: File) => {
      return await UserService.uploadUsers(file);
    },
    onSuccess: () => {
      alert("Upload realizado com sucesso!");
    },
    onError: (error) => {
      console.error(error);
      alert("Erro ao fazer upload.");
    }
  });
}

