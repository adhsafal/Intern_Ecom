import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'

const Category = () => {

    const options = [
        {
            id: 1,
            title: 'Movie',
            slug: 'movie',
            parentId: 0,
        },
        {
            id: 2,
            title: 'Music',
            slug: 'music',
            parentId: 0,
        },
        {
            parentId: 1,
            id: 3,
            title: 'Hollywood',
            slug: 'hollywood',
        },
        {
            parentId: 1,
            id: 4,
            title: 'Bollywood',
            slug: 'bollywood'
        },
        {
            parentId: 3,
            id: 5,
            title: 'Action',
            slug: 'action'
        },
        {
            parentId: 3,
            id: 6,
            title: 'Thriller',
            slug: 'thriller'
        },
        {
            parentId: 3,
            id: 7,
            title: 'Scifi',
            slug: 'scifi'
        },
        {
            parentId: 4,
            id: 8,
            title: 'Romcom',
            slug: 'romcom'
        },
        {
            parentId: 4,
            id: 9,
            title: 'Drama',
            slug: 'drama'
        },
        {
            parentId: 4,
            id: 10,
            title: 'Comedy',
            slug: 'comedy'
        },
        {
            parentId: 2,
            id: 11,
            title: 'English',
            slug: 'english'
        },
        {
            parentId: 2,
            id: 12,
            title: 'Hindi',
            slug: 'hindi'
        },
        {
            parentId: 11,
            id: 13,
            title: 'HipHop',
            slug: 'hiphop'
        },
        {
            parentId: 11,
            id: 14,
            title: 'Rock',
            slug: 'rock'
        },
        {
            parentId: 11,
            id: 15,
            title: 'Country',
            slug: 'country'
        },
        {
            parentId: 12,
            id: 16,
            title: 'Classical',
            slug: 'classical'
        },
        {
            parentId: 12,
            id: 17,
            title: 'Bhajan',
            slug: 'bhajan'
        },
        {
            parentId: 12,
            id: 18,
            title: 'MovieSongs',
            slug: 'movieSongs'
        }
    ]

    const defaultValues = {
        productName: '',
        category: '',
        subCategory: '',
        categories: '',
    }

    const [selectId, setSelectId] = useState()
    const [subSelectId, setsubSelectId] = useState()

    const onSubmit = (values) => {
        console.log(values, values.category)

        setSelectId(values.category)
        setsubSelectId(values.subCategory)
    }



    const { handleSubmit, control } = useForm({ defaultValues })


    return (
        <>
            <form className='category'
                onChange={handleSubmit(onSubmit)}>
                <div className="categoryInput">
                    <h5>Product</h5>
                    <CustomInput control={control} name='productName' />
                </div>
                <div className="categoryOne">
                    <h5>Category</h5>
                    <CustomSelect control={control} name='category' options={
                        options.filter((item, index) => {
                            return item.parentId == 0
                        })
                    } />
                </div>
                <div className="categoryOne">
                    <h5>Sub Category</h5>
                    <CustomSelect control={control} name='subCategory' options={
                        options.filter((item, index) => {
                            return item.parentId == selectId

                        })
                    } />
                </div>
                <div className="categoryOne">
                    <h5>Categories</h5>
                    <CustomSelect control={control} name='categories' options={
                        options.filter((item, index) => {
                            return item.parentId == subSelectId
                        })
                    } />
                </div>
            </form>

        </>
    )
}

export default Category