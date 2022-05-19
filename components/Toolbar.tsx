import React from 'react'
import { Box, IconButton, Tooltip, useColorMode } from '@chakra-ui/react'
import { SiGithub } from 'react-icons/si'
import { GiFlexibleLamp } from 'react-icons/gi'
import { BsMoonStarsFill } from 'react-icons/bs'

const Toolbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box
            w="100%"
            h="3.5em"
            mb="5%"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            pr="1.5em"
            maxW="1600px"
        >
            <Tooltip label={colorMode === "light" ?
                "Dark Mode" : "Light Mode"
            }>
                <IconButton
                    fontSize="xl"
                    variant="ghost"
                    aria-label="Change theme"
                    icon={colorMode === "light" ?
                        <BsMoonStarsFill /> : <GiFlexibleLamp />
                    }
                    onClick={toggleColorMode}
                />
            </Tooltip>
            <Tooltip
                label="Github"
                placement="auto"
            >
                <IconButton
                    as="a"
                    href="https://www.github.com/givensuman/johnmulapi"
                    fontSize="xl"
                    variant="ghost"
                    aria-label="Github"
                    icon={<SiGithub />}
                />
            </Tooltip>
        </Box>
    )
}

export default Toolbar