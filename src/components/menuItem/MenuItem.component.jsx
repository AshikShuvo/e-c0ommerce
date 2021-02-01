import React from 'react'
import { withRouter } from 'react-router-dom';
import './MenuItem.style.scss';
const MenuItem = ({title,imgUrl,size,linkUrl,history,match}) => {
    console.log(imgUrl)
    return (
        <div  className={`${size} menu-item`} onClick={()=>history.push(`${match.path}${linkUrl}`)}>
        <div className="background-image" style={
            {
                backgroundImage:`url(${imgUrl})`
            }
        } />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shope Now</span>
        </div>

    </div>
    )
}

export default withRouter(MenuItem);
