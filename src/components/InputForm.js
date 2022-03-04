
import React from 'react'

export const InputForm = ({ variant, placeholder, padding, ...rest }) => {
    return (
        <div className={`d-grid ${padding ? padding : 'px-5'}`} >
            <input type="text" placeholder={`${placeholder ? placeholder : ''}`} {...rest} />
        </div>
    )
}

export default InputForm