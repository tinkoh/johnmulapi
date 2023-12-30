import {
  IconButton as IconButton_,
  Tooltip,
  forwardRef,
  type IconButtonProps,
  type TooltipProps,
} from "@chakra-ui/react";
import React from "react";
import type { EmotionIconProps } from "../../../node_modules/emotion-icons/types/types.ts";

export interface Props extends IconButtonProps {
  label: string;
  tooltipprops?: Partial<TooltipProps>;
  iconprops?: Partial<EmotionIconProps>;
}

const IconButton = forwardRef<Props, "button">(
  ({ label, icon, onClick, disabled, ...props }, ref) => {
    return (
      <Tooltip label={label} {...props.tooltipprops}>
        <IconButton_
          ref={ref}
          variant="ghost"
          icon={React.cloneElement(icon!, {
            size: "2em",
            ...props.iconprops,
          })}
          disabled={disabled}
          onClick={!disabled ? onClick : undefined}
          {...props}
        />
      </Tooltip>
    );
  }
);

export default IconButton;
