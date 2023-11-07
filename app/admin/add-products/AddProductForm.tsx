'use client'

import Heading from "@/app/ components/Heading";
import CustomCheckBox from "@/app/ components/inputs/CustomCheckBox";
import Input from "@/app/ components/inputs/Input";
import TextArea from "@/app/ components/inputs/TextArea";
import { register } from "module";
import { useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

const AddProductForm = () => {
    const[isLoading,setIsLoading] = useState(false)
    const{register,handleSubmit,setValue,watch,reset,formState:{errors}}=useForm<FieldValues>({
        defaultValues:{
            name:'',
            description:'',
            brand:'',
            category:'',
            inStock:false,
            images:[],
            price:"",
        }
    })
    return (  <>
    <Heading title="Add a Product " center/>
    <Input id="name" label="Name" disabled={isLoading} 
    register={register}
    errors={errors}
    required />
    <Input id="price" label="Price" disabled={isLoading} 
    register={register}
    errors={errors}
    type="number"
    required />
    <Input id="brand" label="Brand" disabled={isLoading} 
    register={register}
    errors={errors}
    required />
    <TextArea id="description" label="Description" disabled={isLoading} 
    register={register}
    errors={errors}
    required />
    <CustomCheckBox id="inStock"register={register} label="This Product is in stock"/>
    </>
        
    );
}
 
export default AddProductForm;