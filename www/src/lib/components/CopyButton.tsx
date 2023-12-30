import IconButton, { type Props as Props_ } from "./IconButton";
import useClipboard from "../hooks/useCopyToClipboard";

import { Copy } from "@emotion-icons/boxicons-solid/Copy";
import { Check } from "@emotion-icons/entypo/Check";
import { useColorModeValue, useToast } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

interface Props extends Omit<Props_, "label" | "aria-label"> {
  text: string;
}

const CopyButton = ({ text, ...props }: Props) => {
  const { clipboard, copy } = useClipboard();

  const background = useColorModeValue("Background", "#1a202c");
  const border = useColorModeValue("#e8ecf1", "#3f444e");

  const toast = useToast();

  const handleClick = async () => {
    await copy(text).then(() => {
      toast({
        title: "Copied!",
        status: "info",
        duration: 500,
        isClosable: false,
      });
    });
  };

  const copyButtonProps = {
    label: "Copy",
    "aria-label": "Copy",
    onClick: handleClick,
    position: "absolute",
    top: -5,
    right: -5,
    variant: "solid",
    rounded: "full",
    bgColor: background,
    border: 2,
    borderColor: border,
    borderStyle: "solid",
    iconprops: {
      size: "1em",
    },
  } as const;

  return (
    <AnimatePresence>
      {clipboard === text ? (
        <motion.div
          key="is copied"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IconButton icon={<Check />} {...copyButtonProps} {...props} />
        </motion.div>
      ) : (
        <motion.div
          key="is not copied"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IconButton icon={<Copy />} {...copyButtonProps} {...props} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CopyButton;
