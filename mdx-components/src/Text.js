import React from "react";
import { Text, Box, Heading } from "grommet";
import { Actions } from "grommet-icons";

function renderIcon({ withIcon, Icon, iconSize, iconColor }) {
  const Component = Icon || Actions;
  if (!withIcon) {
    return;
  }
  return <Component color={iconColor} size={iconSize} />;
}

export const ListItem = ({
  text,
  alignSelf = "center",
  withIcon = false,
  icon,
  Icon,
  iconSize = "large",
  iconColor,
  children,
  ...rest
}) => (
  <Box
    margin="medium"
    alignSelf={alignSelf}
    gap="small"
    align="center"
    direction="row"
  >
    {renderIcon({ withIcon, icon, Icon, iconSize, iconColor })}
    {text && (
      <Text size="xxlarge" {...rest}>
        {text}
      </Text>
    )}
    {children && children}
  </Box>
);

export const PointText = ({ children, ...rest }) => (
  <Text size="xxlarge" margin="medium" {...rest}>
    {children}
  </Text>
);

export const SlideTitle = ({ title }) => (
  <Box
    fill="horizontal"
    pad="medium"
    margin={{ bottom: "large" }}
    border="bottom"
  >
    <Heading alignSelf="center" level="1">
      {title}
    </Heading>
  </Box>
);

export const Points = ({ data, inline, textProps, ...rest }) => (
  <Box gap="medium" {...rest}>
    {data.map(d => (
      <PointText {...textProps}>{d}</PointText>
    ))}
  </Box>
);
