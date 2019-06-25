import React from "react";
import { Text, Box } from "grommet";
import { Actions, Medium } from "grommet-icons";

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
  ...rest
}) => (
  <Box alignSelf={alignSelf} gap="small" align="center" direction="row">
    {renderIcon({ withIcon, icon, iconSize, iconColor })}
    <Text size="medium" {...rest}>
      {text}
    </Text>
  </Box>
);
