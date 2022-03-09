import React from 'react'

export const Alert = ({ children, variant = 'warning', ...rest }) => {
    return (
        <div className={`alert alert-${variant}`} role="alert">
            {children}
        </div>
    )
}

export default Alert