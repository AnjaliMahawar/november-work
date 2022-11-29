import * as yup from 'yup';

export const singnUpSchema=yup.object({
    name: yup.string().min(2).max(15).required('please enter your name'),
    email: yup.string().email().required('please enter your email'),
    password:yup.string().min(6).max(10).required('please enter your password') ,
    confirm_password:yup.string().required().oneOf([yup.ref('password'),null,],'password and confirm password should be same'),
})