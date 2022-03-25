import React from 'react'
import { Controller } from 'react-hook-form'

const CustomSelect = ({ name, control, options, placehoder = "" }) => {

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) =>
                <select onChange={onChange} value={value}>

                    <option>{placehoder}</option>
                    {options.map((item, index) =>
                        <option key={index} value={item.id}>{item.title}</option>
                    )
                    }
                </select>
            }

        />

    )
}

export default CustomSelect