import { useRef } from 'react'
import { Image } from '@chakra-ui/react'

import useMouseLocation from './hooks/useMouseLocation'
import mulaneyImage from "../../../assets/mulaney.png"

const Image_ = () => {

    const mouseLocation = useMouseLocation()

    const imageRef = useRef<HTMLImageElement | null>(null)
    const bounds = imageRef.current?.getBoundingClientRect()

    const CONSTRAINT = 150
    const LIMIT = 2.5

    let bounding = mouseLocation
    if (bounds) {
        bounding = {
            x: (mouseLocation.x - bounds.x - (bounds.x / 2)) / CONSTRAINT,
            y: (mouseLocation.y - bounds.y - (bounds.y / 2)) / CONSTRAINT
        }
    }

    const perspective = {
        x: bounding.x > 0 ? Math.min(bounding.x, LIMIT) : Math.max(bounding.x , -LIMIT),
        y: bounding.y > 0 ? Math.min(bounding.y, LIMIT) : Math.max(bounding.y, -LIMIT)
    }

    return (
        <Image
            ref={imageRef}
            src={mulaneyImage}
            alt="John Mulaney"
            mt="1em"
            mx="auto"
            zIndex={2}
            style={{
                transform: `perspective(100px) rotateX(${perspective.x}deg) rotateY(${perspective.y}deg)`
            }}
        />
    )
}

export default Image_