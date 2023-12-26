import IconButton, { type Props as Props_ } from "./IconButton";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

import { Copy } from "@emotion-icons/fa-solid/Copy"

interface Props extends Omit<Props_, "label" | "aria-label"> {
    text: string
}

const CopyButton = ({
    text,
    ...props
}: Props) => {

    const [ _clipboard, setClipboard ] = useCopyToClipboard()

    return (
        <IconButton 
            label="Copy"
            aria-label="Copy"
            icon={<Copy />}
            onClick={() => setClipboard(text)}
            position="absolute"
            top={0}
            right={0}
            {...props}
        />
    )
}

export default CopyButton