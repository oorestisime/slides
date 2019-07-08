import React from "react";
import { Box } from "grommet";
import { CodeSurferColumnLayout, Step, Code } from "code-surfer";

export const Coder = ({ data }) => (
  <Box pad="small">
    <Box margin={{ top: "xsmall" }} alignSelf="center">
      <CodeSurferColumnLayout sizes={[1]}>
        {data.map(code => (
          <Step key={code.title} title={code.title}>
            <Code lang={code.lang} focus={code.focus} code={code.code} />
          </Step>
        ))}
      </CodeSurferColumnLayout>
    </Box>
  </Box>
);
