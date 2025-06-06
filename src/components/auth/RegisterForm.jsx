import React from "react";
import { useRegisterUser } from "../../hooks/useRegisterUser";
import { useRegisterUserTan } from "../../hooks/useRegisterUserTan";

export default function RegisterForm() {
    // const { register, error, data, loading } = useRegisterUser();//manual hook

    const { mutate, data, error, isPending, isSuccess, isError } = useRegisterUserTan();//tanstack hook


    const handleSubmit = async (e) => {
        const formData = {
            email: "test@gmail.com",
            username: "test123",
            password: "password",
            firstName: "First Name",
            lastName: "Last Name"
        };
        const result = mutate(formData);//replace register

    };

    return (
        <div>
            <button onClick={handleSubmit}>
            </button>
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
            {data && <p style={{ color: 'green' }}>{data.message}</p>}
        </div>
    );
}
