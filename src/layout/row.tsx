import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

interface RowProps {
  children?: any;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Row = (props: RowProps) => {
  const flex = props.size || 1;
  return (
    <View style={{ ...{ flex, flexDirection: "row" }, ...props.style }}>
      {props.children}
    </View>
  );
};

export default Row;
