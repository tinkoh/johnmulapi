import IconButton, { type Props as Props_ } from "./IconButton";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import useMulaneyQuote from "../hooks/useMulaneyQuote";

import { Copy } from "@emotion-icons/boxicons-solid/Copy"
import { Check } from "@emotion-icons/entypo/Check"
import { useColorModeValue, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props extends Omit<Props_, "label" | "aria-label"> {
    text: string
}

const CopyButton = ({
    text,
    ...props
}: Props) => {

    const [ _clipboard, setClipboard ] = useCopyToClipboard()
    const [ icon, setIcon ] = useState(<Copy />)

    const toast = useToast()

    const handleClick = async () => {
        await setClipboard(text)
            .then(() => {
                setIcon(<Check />)
                toast({
                    title: "Copied!",
                    status: "info",
                    duration: 500,
                    isClosable: false
                })
            })
    }

    const { subscribe } = useMulaneyQuote()

    useEffect(() => {
        subscribe(() => setIcon(<Copy />))
    }, [])

    return (
        <IconButton 
            label="Copy"
            aria-label="Copy"
            icon={icon}
            onClick={handleClick}
            position="absolute"
            top={-5}
            right={-5}
            variant="solid"
            rounded="full"
            iconprops={{
                size: "1em"
            }}
            {...props}
        />
    )
}

export default CopyButton