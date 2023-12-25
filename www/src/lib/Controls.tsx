import { Center } from "@chakra-ui/react";
import { Refresh } from "@emotion-icons/heroicons-outline/Refresh"

import IconButton from "./components/IconButton";
import useMulaneyQuote from "./hooks/useMulaneyQuote";

const Controls = () => {

    const { fetch } = useMulaneyQuote()

    return (
        <Center my={6}>
            <IconButton 
                label="Refresh"
                aria-label="Refresh"
                icon={<Refresh />}
                onClick={fetch}
            />
        </Center>
    )
}

export default Controls