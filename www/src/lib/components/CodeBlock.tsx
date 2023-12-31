import { Box, Code, type CodeProps, Text } from "@chakra-ui/react";
import CopyButton from "./CopyButton";

interface CodeBlockProps extends CodeProps {
  code: string;
}

const CodeBlock = ({ code, ...props }: CodeBlockProps) => {
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
