import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, type = 'text', name }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => <input onChange={onChange} value={value} type={type} />}
        />
    )
}

export default CustomInput