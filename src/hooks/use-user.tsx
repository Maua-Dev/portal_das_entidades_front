import { UserService } from "../services/user-service";
import { useQuery } from "@tanstack/react-query";

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
