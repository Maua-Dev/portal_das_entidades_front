import { UserService } from "../services/user-service";
import { useQuery } from "@tanstack/react-query";

export function useAuthUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      console.log("Authenticating user...");
      const response = await UserService.authUser();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("User authenticated:", response);
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}

export function useAllUsers() {
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      console.log("Fetching all users...");
      const response = await UserService.getAllUsers();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("All users fetched:", response);
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}
