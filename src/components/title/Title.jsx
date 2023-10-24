import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";

const Title = (props) => {
  const { iconName, text, iconColor, textColor, textSize } = props;

  return (
    <Box display="flex" alignItems="center">
      <Icon
        as={iconName}
        boxSize={["10px", "30px", "50px"]}
        color={iconColor}
        mr={2}
      />
      <Text fontSize={textSize} color={textColor}>
        {text}
      </Text>
    </Box>
  );
};

export default Title;
