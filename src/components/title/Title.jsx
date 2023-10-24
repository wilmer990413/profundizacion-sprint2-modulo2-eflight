import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";

const Title = (props) => {
  const { iconName, text, iconColor, textColor, textSize } = props;

  return (
    <Box display="flex" alignItems="center">
      <Text fontSize={textSize} color={textColor}>
        {text}
      </Text>
    </Box>
  );
};

export default Title;
