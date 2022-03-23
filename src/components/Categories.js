import React, { useEffect, useState } from 'react'
import CustomSelect from './CustomSelect'

const Categories = ({ options, control, watch }) => {

    const [opt, setOpt] = useState([])

    const selectId = watch('subCategory')
    const seId = watch('category')
    useEffect(() => {
        const filterdOptions = options.filter((item, index) => {
            console.log(selectId)
            return item.parentId === parseInt(selectId)

        })
        setOpt(filterdOptions)
    }, [selectId, seId])
    return (
        <>
            <div className="categoryOne">
                <h5>Categories</h5>
                <CustomSelect control={control} name='categories' options={opt} />
            </div>
        </>
    )
}

export default Categories