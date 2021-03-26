import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

interface ColProps {
  size?: number;
  children?: any;
  style?: StyleProp<ViewStyle>;
  justyfyCenter?: boolean;
  alignCenter?: boolean;
}

const Col = (props: ColProps) => {
  const flex = props.size || 1;
  const style = {...props.style};
  if (props.justyfyCenter) style.justifyContent = 'center';
  if (props.alignCenter) style.alignItems = 'center';
  return (
    <View style={{ ...{ flex, flexDirection: "column" }, ...style }}>
      {props.children}
    </View>
  );
};

export default Col;
