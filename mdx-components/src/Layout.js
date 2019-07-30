import React from "react";
import { Grommet, Box, Text } from "grommet";
import { customTheme } from "./theme";
import { SlideTitle } from "./Text";

const Layout = ({ children, conference, title }) => (
  <Grommet full theme={customTheme}>
    <Box background="dark-2" height="100vh">
      <Box height="90vh">
        {title && <SlideTitle title={title} />}
        <Box fill="vertical" justify="center">
          {children}
        </Box>
      </Box>
      <Box
        height="10vh"
        pad={{ horizontal: "xlarge" }}
        border="top"
        direction="row-responsive"
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
