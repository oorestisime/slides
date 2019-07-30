import React from "react";
import { CodeSurferLayout, Code } from "code-surfer";
import { Box } from "grommet";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled(Box)`
  font-size: 40px;
`;
const GlobalStyle = createGlobalStyle`
  code > div:nth-child(2) {
    overflow: visible !important;
  }
`;

export const Command = ({ lang, code }) => (
  <Container margin={{ top: "medium" }} height="small" alignSelf="center">
    <GlobalStyle />
    <CodeSurferLayout>
      <Code lang={lang || "bash"} code={code} />
    </CodeSurferLayout>
  </Container>
);
