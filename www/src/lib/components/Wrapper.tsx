import { Box, type BoxProps } from "@chakra-ui/react"

const Wrapper: React.FC<BoxProps> = ({ ...props }) => {
    return (
        <Box
            overflow="hidden"
            position="relative"
            width="100%"
            minHeight="100vh"
            {...props}
        >
            {props.children}
        </Box>
    )
}

export default Wrapper