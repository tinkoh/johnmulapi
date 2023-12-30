import { Box, HStack, useColorMode } from "@chakra-ui/react";
import { Github } from "@emotion-icons/fa-brands/Github";
import { Flashlight } from "@emotion-icons/entypo/Flashlight";
import { MoonStarsFill } from "@emotion-icons/bootstrap/MoonStarsFill";

import IconButton from "./components/IconButton";

const Toolbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      w="100%"
      pt={8}
      mb="5%"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      pr={5}
      maxW="1600px"
    >
      <HStack spacing={4}>
        <IconButton
          label={colorMode === "light" ? "Dark Mode" : "Light Mode"}
          aria-label="Change theme"
          icon={colorMode === "light" ? <MoonStarsFill /> : <Flashlight />}
          onClick={toggleColorMode}
        />
        <IconButton
          label="Github"
          as="a"
          href="https://www.github.com/givensuman/johnmulapi"
          aria-label="Github"
          icon={<Github />}
          tooltipprops={{
            placement: "bottom",
          }}
        />
      </HStack>
    </Box>
  );
};

export default Toolbar;
