'use client';

import { useEffect, useState } from "react";
import Heading from "../ components/Heading";
import Input from "../ components/inputs/Input";
import { FieldValues, useForm ,SubmitHandler} from "react-hook-form";
import Button from "../ components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
interface RegisterFormProps
{
    currentUser:SafeUser |null;
}
const RegisterForm:React.FC<RegisterFormProps> = ({currentUser}) => {
    const [isLoading,setIsLoading]=useState(false)
    const {register,handleSubmit,formState:{errors},} = useForm<FieldValues>({defaultValues:{
        name: "", 
        email: "",
        password: "",
    }});

    const router = useRouter()
    useEffect(()=>{if(currentUser){router.push('/cart');
  router.refresh();
}},[]);

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{setIsLoading(true);
    setIsLoading(true);
        axios
        .post("/api/register",data)
        .then(()=>{
<<<<<<< HEAD
            toast.success('Tạo tài khoản thành công');
=======
            toast.success('Tài khoản đã được tạo');
>>>>>>> 56946f97d0ecc650cb0506041bde71dc6d7cdaa8
            signIn("credentials",{
                email: data.email,
                password: data.password,
                redirect: false,
            }).then((callback)=> {
                if(callback?.ok) {
                    router.push("/cart");
                    router.refresh();
                    toast.success('Đăng nhập');
                }
                if(callback?.error)
                {
                    toast.error(callback.error);
                }
            });
        }).catch(()=> toast.error("Đã xảy ra lỗi")).finally(()=>{
            setIsLoading(false)
        })
    };
    if(currentUser)
    {
<<<<<<< HEAD
        return <p className="text-center">Đăng nhập.Chờ một xíu...</p>
=======
        return <p className="text-center">Đã đăng nhập. Đang chuyển hướng...</p>
>>>>>>> 56946f97d0ecc650cb0506041bde71dc6d7cdaa8
    }
    return (  <>
    <Heading title="Đăng ký thành viên LuxeGlobal"/>
    <Button 
    outline
    label="Đăng nhập với Google"
    icon={AiOutlineGoogle}
    onClick={() => {signIn('google') }}/>
    <hr className="bg-slate-300 w-full h-px"/>
    <Input id="name"
    label="Tên người dùng"
    disabled={isLoading} 
    register={register}
    errors={errors}
    required/>
    <Input id="email"
    label="Email"
    disabled={isLoading} 
    register={register}
    errors={errors}
    required/>
    <Input id="password"
    label="Mật khẩu"
    disabled={isLoading} 
    register={register}
    errors={errors}
    required
    type="password"/>
<<<<<<< HEAD
    <Button label={isLoading?"Loading":'Dang ky'} onClick={handleSubmit(onSubmit)}/>
    <p className="text-sm">Bạn có tài khoản chưa?{""} <Link className="underline" href='/login'>Log in
=======
    <Button label={isLoading?"Loading":'Đăng ký'} onClick={handleSubmit(onSubmit)}/>
    <p className="text-sm">Bạn đã sẵn sàng tạo tài khoản chưa?{""} <Link className="underline" href='/login'>Log in
>>>>>>> 56946f97d0ecc650cb0506041bde71dc6d7cdaa8
    </Link>
        </p>
    </>);
}
 
export default RegisterForm;