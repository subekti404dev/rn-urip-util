import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

interface ColProps {
  size?: number;
  children?: any;
  style?: StyleProp<ViewStyle>;
}

const Col = (props: ColProps) => {
  const flex = props.size || 1;
  return (
    <View style={{ ...{ flex, flexDirection: "column" }, ...props.style }}>
      {props.children}
    </View>
  );
};

export default Col;
