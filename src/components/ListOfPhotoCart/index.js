import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const PhotoCartList = () => {
    return (
        <ul>
             {
                 [1,2,3,4,5,6].map(id => <PhotoCard key = {id}/>)
             }
        </ul>
    )
}
