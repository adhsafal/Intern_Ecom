import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomInput from './CustomInput'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const Attribute = () => {



    const defaultValues = {
        product: '',
        status: ''
    }



    // const [products, setProducts] = useState([])
    // const [stat, setStat] = useState([])
    const [datas, setDatas] = useState([])




    const onSubmit = (values, e) => {
        console.log(values)
        setDatas([...datas, { title: values.product, status: values.status }])
        console.log(datas)
        reset()
    }

    const handleDelete = (id) => {
        const updatedDatas = datas.filter((item, index) => {
            return index !== id
        })

        setDatas(updatedDatas)
    }

    const handleEdit = (id) => {

    }

    const schema = yup.object({
        product: yup.string().required('Product name required'),
        status: yup.string().required('Status required'),

    }).required();

    const { handleSubmit, control, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) }, { defaultValues })



    return (
        <>
            <form
                className='attribute'
                onSubmit={handleSubmit(onSubmit)}>
                <div className="product">
                    <h1>Product</h1>
                    <CustomInput control={control} name='product' />
                    <p>{errors.product?.message}</p>
                </div>
                <div className="product">
                    <h1>Status</h1>
                    <CustomInput control={control} name='status' />
                    <p>{errors.status?.message}</p>

                </div>
                <button type='submit'> Save </button>
            </form>

            <div className='attribute_lists'>
                <ul>
                    {datas.map((item, index) =>
                        <li key={index}>
                            {item.title}{item.status}
                            <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
                            <i className="fa-solid fa-pen-to-square" onClick={() => handleEdit(index)}></i>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}



export default Attribute