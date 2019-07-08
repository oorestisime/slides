import Layout from "./Layout";
import { Box, Heading } from "grommet";

export const Hero = ({ title, level = 1 }) => (
  <Layout>
    <Box animation="fadeIn" alignSelf="center" direction="row" fill="vertical">
      <Heading alignSelf="center" level={level}>
        {title}
      </Heading>
    </Box>
  </Layout>
);
