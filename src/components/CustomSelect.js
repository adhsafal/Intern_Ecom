import React from 'react'
import { Controller } from 'react-hook-form'

const CustomSelect = ({ name, control, options }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) =>
                <select onChange={onChange} value={value}>
                    {
                        options.map((item, index) =>
                            <option key={index} value={item.id}>{item.title}</option>
                        )
                    }
                </select>
            }

        />

    )
}

export default CustomSelect