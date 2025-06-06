import { registerUserApi } from "../api/authApi";

export const registerUserService = async (formData) => {
    try {
        const response = await registerUserApi(formData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Registration failed" };
    }
}

