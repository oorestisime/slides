import React from "react";
import { CodeSurferLayout, Code } from "code-surfer";
import { Box } from "grommet";

export const Command = ({ lang, code }) => (
  <Box margin={{ top: "medium" }} height="xsmall" alignSelf="center">
    <CodeSurferLayout>
      <Code lang={lang || "bash"} code={code} />
    </CodeSurferLayout>
  </Box>
);
