import { UserService } from "../services/user-service";
import { useQuery } from "@tanstack/react-query";

export const authUser = () => {
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
};
