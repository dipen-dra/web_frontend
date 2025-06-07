import React from "react";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
    const { mutate, data, error, isPending } = useLoginUser();

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: (data) => {
            mutate(data);
        }
    });

    return (
        <div>
            <h2>LoginForm</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                    <p>{formik.errors.email}</p>
                )}

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                    <p>{formik.errors.password}</p>
                )}

                <button type="submit">Login</button>
            </form>
        </div>
    );
}
