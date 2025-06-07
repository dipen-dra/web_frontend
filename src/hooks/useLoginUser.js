import { loginUserService } from "../services/authServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useLoginUser = () => {
    return useMutation({
        mutationFn: loginUserService,
        mutationKey: ["login-key"],
        onSuccess: (data) => {
            toast.success("Login successful!");
            console.log("Login successful:", data);
            // You can redirect or store user data here
        },
        onError: (error) => {
            toast.error("Login failed. Please try again.");
            console.error("Login failed:", error);
        }
    });
};
