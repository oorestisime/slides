import React from "react";
import { Text, Box } from "grommet";
import { Actions } from "grommet-icons";

function renderIcon({ withIcon, icon, iconSize, iconColor }) {
  if (!withIcon) {
    return;
  }
  return icon || <Actions color={iconColor} size={iconSize} />;
}

export const ListItem = ({
  text,
  alignSelf = "center",
  withIcon = false,
  icon,
  iconSize = "medium",
  iconColor,
  children,
  ...rest
}) => (
  <Box alignSelf={alignSelf} gap="small" align="center" direction="row">
    {renderIcon({ withIcon, icon, iconSize, iconColor })}
    {text && (
      <Text size="medium" {...rest}>
        {text}
      </Text>
    )}
    {children && children}
  </Box>
);

export const PointText = ({ children, ...rest }) => (
  <Text size="large" margin="xsmall" {...rest}>
    {children}
  </Text>
);

export const SlideTitle = ({ title }) => (
  <Box
    alignSelf="center"
    fill="horizontal"
    pad="medium"
    margin={{ bottom: "large" }}
    border="bottom"
  >
    <Text size="xxlarge">{title}</Text>
  </Box>
);
