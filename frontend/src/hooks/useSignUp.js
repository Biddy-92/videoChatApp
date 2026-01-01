import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";

const useSignUp = () => {
  const queryClient = useQueryClient();

  // Safe mutation
  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  return {
    isPending: mutation.isLoading || false,
    error: mutation.error || null,
    signupMutation: mutation.mutate,
  };
};

export default useSignUp