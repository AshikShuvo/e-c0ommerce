import React, { Component } from 'react'
import CollectionPreview from '../../components/collectionPreview/CollectionPreview.component'
import data from './collection.data'
export default class Shop extends Component {
    constructor(props){
        super(props)
        this.state={
            collection:data
        }
        
    }
    render() {
        const {collection}=this.state;
        return (
            <>
                {
                    collection.map(({id,...otherCollectionProps})=><CollectionPreview key={id}  {...otherCollectionProps}/>)
                }
                
                
            </>
        )
    }
}
