import React, { useEffect, useRef, useState } from 'react'
import { Category } from '../Category'
import { ImgWrapper, Button, Img, Article } from './styles'
//import { MdFavoriteBorder } from 'react-icons'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const element = useRef(null)
    const [show, setShow] = useState(false)
    useEffect(() => {
        import('intersection-observer')
        .then(()=>{
            const observer = new IntersectionObserver(entries => {
            
                const { isIntersecting } = entries[0]
                console.log(isIntersecting)
                if (isIntersecting) {
                    setShow(true)
                    observer.disconnect()
                }
    
            })
            observer.observe(element.current)
        })
        

    }, [element])

    return (
        <Article ref={element}>
            {
                show &&
                <>
                    <a href={`/detail/${id}`} >
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    <Button>

                    </Button>
                </>
            }
        </Article>
    )
}


