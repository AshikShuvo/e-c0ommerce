import React, { Component } from 'react'
import MenuItem from '../menuItem/MenuItem.component'

export default class Directory extends Component {
    constructor(props){
        super(props)
        this.state={
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    size: 'small',
                    linkUrl: 'hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    size: 'small',
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    size: 'small',
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'big',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'big',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imageUrl,size,id,linkUrl})=>(
                        <MenuItem key={id} title={title} imgUrl={imageUrl} linkUrl={linkUrl}size={size} />
                    ))
                }
            </div>
        )
    }
}
