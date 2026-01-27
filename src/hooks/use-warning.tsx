import {
  WarningService,
  type ORG,
  type Role,
} from "../services/warning-service";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export function useWarning() {
  return useQuery({
    queryKey: ["warning"],
    queryFn: async () => {
      const response = await WarningService.getWarning();
      return response;
    },
    retry: 2,
  });
}

export function useAllWarnings() {
  return useQuery({
    queryKey: ["allWarnings"],
    queryFn: async () => {
      const response = await WarningService.getAllWarnings();
      return response;
    },
    retry: 2,
  });
}

export function useCreateWarning() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      title: string;
      expire: number;
      description: string;
      target_role: Role;
      target_org: ORG;
      isPending?: boolean;
    }) => {
      return await WarningService.createWarning(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["warning"] });
      alert("Aviso criado com sucesso!");
    },
    onError: (error) => {
      console.error(error);
      alert("Erro ao criar aviso.");
    },
  });
}
// export function useUpdateWarning() {
//     const queryClient = useQueryClient();
//     return useMutation({
//         mutationFn: async (data: {
//             warning_id: string;
//             title: string;
//             date: string;
//             description: string;
//         }) => {
//             return await WarningService.updateWarning(data);
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ["warning"] });
//             alert("Aviso atualizado com sucesso!");
//         },
//         onError: (error) => {
//             console.error(error);
//             alert("Erro ao atualizar aviso.");
//         },
//     });
// }
export function useDeleteWarning() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (warning_id: string) => {
      return await WarningService.deleteWarning(warning_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["warning"] });
      alert("Aviso excluído com sucesso!");
    },
    onError: (error) => {
      console.error(error);
      alert("Erro ao excluir aviso.");
    },
  });
}
