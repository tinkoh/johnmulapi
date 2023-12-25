import { Box, IconButton as IconButton_, Tooltip, forwardRef, type IconButtonProps, type TooltipProps } from "@chakra-ui/react"
import React from "react"

interface Props extends IconButtonProps {
    label: string,
    as?: keyof HTMLElementTagNameMap,
    tooltipProps?: Partial<TooltipProps>
}

const IconButton = forwardRef<Props, "button">(({ label, icon, ...props }, ref) => {
    return (
        <Tooltip label={label} {...props.tooltipProps}>
            <IconButton_
                ref={ref}
                variant="ghost"
                icon={React.cloneElement(icon!, {
                    size: "2em"
                })}
                {...props}
            />
        </Tooltip>
    )
})

export default IconButton