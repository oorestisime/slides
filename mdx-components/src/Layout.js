import React from "react";
import { Grommet, Box, Text } from "grommet";
import { customTheme } from "./theme";

const Layout = ({ children, conference }) => (
  <Grommet full theme={customTheme}>
    <Box background="dark-2" height="100vh">
      <Box height="90vh">{children}</Box>
      <Box
        height="10vh"
        pad={{ horizontal: "xlarge" }}
        border="top"
        direction="row"
        justify="between"
      >
        <Text alignSelf="center" size="large" color="brand">
          {conference}
        </Text>
        <Text alignSelf="center" size="large" color="brand">
          @oorestisime/slides
        </Text>
        <Text alignSelf="center" size="large" color="brand">
          @oorestisime
        </Text>
      </Box>
    </Box>
  </Grommet>
);

export default Layout;
