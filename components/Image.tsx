import React, { useState, useRef, useEffect } from 'react'
import { Image } from '@chakra-ui/react'

import mulaneyImage from '../assets/mulaney.png'

const Image_ = () => {

    const [movement, setMovement] = useState({
        x: 0,
        y: 0
    })

    const imageRef = useRef<HTMLImageElement | null>(null)
    const bounds = imageRef.current?.getBoundingClientRect()
    const CONSTRAINT = 100

    useEffect(() => {
        const updateCoords = (e: MouseEvent) => {
            if (bounds) {
                setMovement({
                    x: -(e.clientY - bounds!.y - (bounds!.height/2))/CONSTRAINT,
                    y: -(e.clientX - bounds!.x - (bounds!.height/2))/CONSTRAINT
                })
            }

        }
        window.addEventListener('mousemove', updateCoords)
        return () => window.removeEventListener('mousemove', updateCoords)
    }, [bounds])

    return (
        <Image
            ref={imageRef}
            src={mulaneyImage.src}
            alt="John Mulaney"
            mt="1em"
            mx="auto"
            zIndex={2}
            transform={`perspective(100px) rotateX(${movement.x}deg) rotateY(${movement.y}deg)`}
        />
    )
}

export default Image_