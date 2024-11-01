import { FC, useContext } from "react";
import { AuthContext, ICurrentUser } from "../components/AuthProvider";
import {Navigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

type FormValues = {
    email: string;
    password: string;
    name: string
}

const schema = yup
  .object({
    email: yup.string().email('Invalid Email format').required('Email is required'),
    password: yup.string().required('Password is required'),
    name: yup.string().min(3, 'Name To Short').required('Name is required')
  })
  .required()


const Register: FC = () => {
    const authContext = useContext(AuthContext);

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<FormValues>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const user:ICurrentUser = {id:1 , email: data.email}
        authContext?.setUser(user)
        reset()
    }

    if (authContext?.user) return <Navigate to='/' />

    return (
        <>
          <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <input {...register('email')} type="text" />
            {errors.email && <p className="error">{errors.email.message}</p>}
         </div>
         <div className="form-item">
            <input {...register('password')} type="password" />
            {errors.password && <p className="error">{errors.password.message}</p>}
         </div>
         <div className="form-item">
            <input {...register('name')} type="name" />
            {errors.name && <p className="error">{errors.name.message}</p>}
         </div>
          <button disabled={!isValid} type="submit">Register</button>
          </form>
        </>
    )
}

export default Register;