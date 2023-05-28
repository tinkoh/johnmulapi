import { Box, keyframes, useColorModeValue } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

const MouseFollow = () => {

    const [ coords, setCoords ] = useState({
        x: 0,
        y: 0
    })

    const SIZE = 300

    const updateMouseCoords = (e: MouseEvent) => {
        setCoords({
            x: e.pageX - SIZE/2,
            y: e.pageY - SIZE/2
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMouseCoords)
        return () => window.removeEventListener('mousemove', updateMouseCoords)
    }, [])

    const spin = keyframes`
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    `
    const animation = `${spin} infinite 7s linear`

    const background = useColorModeValue(
        "linear-gradient(90deg, rgba(214,212,254,1) 0%, rgba(214,214,255,1) 35%, rgba(147,237,255,1) 100%)",
        "linear-gradient(90deg, rgba(116,115,128,1) 0%, rgba(64,101,121,1) 35%, rgba(72,41,179,1) 100%)" 
    )

    return (
        <Box 
            h={SIZE}
            w={SIZE}
            rounded="full"
            background={background}
            position="absolute"
            animation={animation}
            style={{
                top: coords.y,
                left: coords.x
            }}
            zIndex={-100}
            filter="blur(500px)"
        />
    )
}

export default MouseFollow 