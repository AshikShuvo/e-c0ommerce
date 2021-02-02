import React from 'react'
import "./Button.style.scss"
const CustomButton = ({children,...otherProps}) => {
    return (
        <div>
            <button className="custom-button" {...otherProps}>
                {children}
            </button>
        </div>
    )
}

export default CustomButton
