import { useMutation } from "@tanstack/react-query";
//useMutation for (post/put/uodate/patch/delet)


import { registerUserService } from "../services/authServices";
import { toast } from "react-toastify";
import { data } from "react-router-dom";

export const useRegisterUserTan = () => {
    return useMutation(
        {
            mutationFn: registerUserService,//which function to run
            mutationKey: ['register'],//key for this hook
            onSuccess: (data) => {
                toast.success(data.message || "Registration SuccessFull")
            },
            onError: (err) => {
                toast.error(err.message || "Registration Error")
            }
        },

    )
}
//mutationfn:(formdata) =>resgiteruserservice(formdata)
