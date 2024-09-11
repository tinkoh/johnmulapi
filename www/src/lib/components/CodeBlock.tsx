import { Box, Code, type CodeProps, Text, useColorModeValue } from "@chakra-ui/react";
import CopyButton from "./CopyButton";

interface CodeBlockProps extends CodeProps {
  code: string;
}

const CodeBlock = ({ code, ...props }: CodeBlockProps) => {

  const bg = useColorModeValue(
    "gray.100",
    "gray.700"
  );

  return (
    <Box position="relative" boxShadow="lg">
      <Code
        display="block"
        whiteSpace="pre"
        p={4}
        rounded="md"
        fontWeight="semibold"
        overflowX="scroll"
        colorScheme="facebook"
        bgColor={bg}
        {...props}
      >
        <Text minWidth="fit-content" pr={4}>
          {code}
        </Text>
      </Code>
      <CopyButton text={code} />
    </Box>
  );
};

export default CodeBlock;
