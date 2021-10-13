import React from 'react'
import { Category } from '../Category'
import { ImgWrapper, Button, Img } from './styles'
//import { MdFavoriteBorder } from 'react-icons'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg"

export const PhotoCard = ({id, likes = 0 , src= DEFAULT_IMAGE}) => {
    console.log('object')
    return (
        <article>
            <a href = {`/detail/${id}`} >
                <ImgWrapper>
                    <Img src  = {src}/>
                </ImgWrapper>
            </a>
            <Button>
                
            </Button>
        </article>
    )
}


