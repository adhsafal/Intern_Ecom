import React, { useEffect, useState } from 'react'
import CustomSelect from './CustomSelect'

const SubCategory = ({ options, control, watch, setValue }) => {

    const [opt, setOpt] = useState([])

    const selectId = watch('category')
    useEffect(() => {
        setValue('subCategory', '')
        const filterdOptions = options.filter((item, index) => {
            console.log(selectId)
            return item.parentId === parseInt(selectId)

        })
        setOpt(filterdOptions)
    }, [selectId])

    return (
        <>
            <div className="categoryOne">
                <h5>Sub Category</h5>
                <CustomSelect placehoder='Choose Sub_Category' control={control} name='subCategory' options={opt} />
            </div>
        </>
    )
}

export default SubCategory