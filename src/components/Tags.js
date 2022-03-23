import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomInput from './CustomInput'

const Tags = () => {



    const [tags, setTags] = useState([])

    const onSubmit = (val, e) => {

        if (e.keyCode === 32) {
            reset()
            val.tag.trim() && setTags([...tags, { tag: val.tag.trim() }])
            console.log(val.tag)

        }



    }

    const defaultValues = {
        tag: ''
    }

    const deleteTags = (id) => {
        const updatedTags = tags.filter((item, index) => {
            return index !== id
        })
        setTags(updatedTags)
    }

    const { handleSubmit, control, reset } = useForm({ defaultValues })
    return (
        <>
            <h1 className='title'>Tags</h1>
            <form className='tags'
                onKeyUp={handleSubmit(onSubmit)}>
                <div>
                    <ul className="tagLists">
                        {
                            tags.map((item, index) =>
                                <li key={index}> {item.tag} <i className="fa-solid fa-xmark" onClick={() => deleteTags(index)}></i></li>
                            )}
                    </ul>
                </div>
                <CustomInput control={control} name='tag' />
            </form>



        </>
    )
}

export default Tags

    // 