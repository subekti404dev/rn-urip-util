import * as React from "react";
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
  const style = props.style || {};
  style.flex = flex;
  style.flexDirection = 'row';
  if (props.justyfyCenter) style.justifyContent = 'center';
  if (props.alignCenter) style.alignItems = 'center';
  return (
    <View style={style}>
      {props.children}
    </View>
  );
};

export default Row;