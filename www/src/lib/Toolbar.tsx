import { Box, HStack, Tooltip, useColorMode } from '@chakra-ui/react'
import { Github } from "@emotion-icons/fa-brands/Github"
import { Flashlight } from "@emotion-icons/entypo/Flashlight"
import { MoonStarsFill } from "@emotion-icons/bootstrap/MoonStarsFill"

import IconButton from './components/IconButton'

const Toolbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box
            w="100%"
            h="3.5em"
            pt={4}
            mb="5%"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            pr="1.5em"
            maxW="1600px"
        >
            <HStack spacing={4}>
                <IconButton 
                    label={colorMode === "light" ?
                        "Dark Mode" : "Light Mode"
                    }
                    aria-label="Change theme"
                    icon={colorMode === "light" ?
                        <MoonStarsFill /> : <Flashlight />
                    }
                    onClick={toggleColorMode}
                />
                <IconButton 
                    label="Github"
                    as="a"
                    href="https://www.github.com/givensuman/johnmulapi"
                    aria-label="Github"
                    icon={<Github />}
                    tooltipProps={{
                        placement: "bottom"
                    }}
                />
            </HStack>
        </Box>
    )
}

export default Toolbar