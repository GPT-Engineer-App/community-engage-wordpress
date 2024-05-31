import { useState } from "react";
import { Container, VStack, Text, Heading, Box, Button, Input, Select, useColorMode, useColorModeValue, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [themeOptions, setThemeOptions] = useState({
    primaryColor: "#3182CE",
    secondaryColor: "#2D3748",
    fontFamily: "Arial, sans-serif",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setThemeOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const customTheme = extendTheme({
    colors: {
      primary: themeOptions.primaryColor,
      secondary: themeOptions.secondaryColor,
    },
    fonts: {
      body: themeOptions.fontFamily,
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4} width="100%">
          <Button onClick={toggleColorMode} alignSelf="flex-end">
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
          <Heading as="h1" color="primary">
            Community Engagement on WordPress
          </Heading>
          <Text fontSize="lg" color="secondary">
            Customize your theme options below:
          </Text>
          <Box width="100%">
            <Text>Primary Color:</Text>
            <Input type="color" name="primaryColor" value={themeOptions.primaryColor} onChange={handleInputChange} />
          </Box>
          <Box width="100%">
            <Text>Secondary Color:</Text>
            <Input type="color" name="secondaryColor" value={themeOptions.secondaryColor} onChange={handleInputChange} />
          </Box>
          <Box width="100%">
            <Text>Font Family:</Text>
            <Select name="fontFamily" value={themeOptions.fontFamily} onChange={handleInputChange}>
              <option value="Arial, sans-serif">Arial</option>
              <option value="'Times New Roman', serif">Times New Roman</option>
              <option value="'Courier New', monospace">Courier New</option>
              <option value="'Georgia', serif">Georgia</option>
            </Select>
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
