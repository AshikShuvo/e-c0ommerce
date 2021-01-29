import React from 'react'
import './MenuItem.style.scss';
const MenuItem = ({title,imgUrl}) => {
    console.log(imgUrl)
    return (
        <div style={
            {
                backgroundImage:`url(${imgUrl})`
            }
        } className="menu-item">
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shope Now</span>
        </div>

    </div>
    )
}

export default MenuItem
