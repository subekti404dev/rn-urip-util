import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

interface RowProps {
  children?: any;
  size?: number;
  style?: StyleProp<ViewStyle>;
  justyfyCenter?: boolean;
  alignCenter?: boolean;
}

const Row = (props: RowProps) => {
  const flex = props.size || 1;
  const style = {...props.style};
  if (props.justyfyCenter) style.justifyContent = 'center';
  if (props.alignCenter) style.alignItems = 'center';
  return (
    <View style={{ ...{ flex, flexDirection: "row" }, ...style }}>
      {props.children}
    </View>
  );
};

export default Row;
