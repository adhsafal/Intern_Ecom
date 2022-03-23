import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomInput from './CustomInput'



const Attribute = () => {



    const defaultValues = {
        product: '',
        status: ''
    }

    const { handleSubmit, control, reset } = useForm({ defaultValues })


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
    return (
        <>
            <form
                className='attribute'
                onSubmit={handleSubmit(onSubmit)}>
                <div className="product">
                    <h1>Product</h1>
                    <CustomInput control={control} name='product' />
                </div>
                <div className="product">
                    <h1>Status</h1>
                    <CustomInput control={control} name='status' />
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