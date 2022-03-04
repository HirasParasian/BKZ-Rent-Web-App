import React from 'react'

export const Button = ({ children, block, padding, variant = 'info', ...rest }) => {
    return (
        < div className={block ? `d-grid ${padding ? padding : 'px-5'}` : `d-inline-block ${padding ? padding : 'px-5'}`} >
            <button type="button" className={`btn btn-${variant}`} {...rest}>{children}</button>
        </div >

    )
}

export default Button
