import { UserService } from "../services/user-service";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

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
      return response;
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
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
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
      return await UserService.updateUser(data);
    },
    onSuccess: () => {
      // atualiza lista e perfis que possam ter mudado
      queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      alert("Usuário atualizado com sucesso!");
    },
    onError: (error) => {
      console.error(error);
      alert("Erro ao atualizar usuário.");
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user_id: string) => {
      return await UserService.deleteUser(user_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      alert("Usuário deletado com sucesso!");
    },
    onError: (error: any) => {
      console.error(error);

      // se o backend retornar 403 quando não tem permissão:
      if (error?.response?.status === 403) {
        alert("Você não tem permissão para excluir usuários.");
        return;
      }

      alert("Erro ao deletar usuário.");
    },
  });
}

export function useExportUsers() {
  return useQuery({
    queryKey: ["exportUsers"],
    queryFn: async () => {
      return await UserService.exportUsers();
    },
    retry: 2,
  });
}
