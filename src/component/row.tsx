import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

interface RowProps {
  children?: any;
  size?: number;
  style?: StyleProp<ViewStyle>;
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  color?: string;
}

const Row = (props: RowProps) => {
  const flex = props.size || 1;
  const style = props.style || {};
  style.flex = flex;
  style.flexDirection = 'row';
  if (props.justifyStart) style.justifyContent = 'flext-start';
  if (props.justifyCenter) style.justifyContent = 'center';
  if (props.justifyEnd) style.justifyContent = 'flex-end';
  if (props.alignStart) style.alignItems = 'flex-start';
  if (props.alignCenter) style.alignItems = 'center';
  if (props.alignEnd) style.alignItems = 'flex-end';
  if (props.color) style.backgroundColor = props.color;
  return (
    <View style={style}>
      {props.children}
    </View>
  );
};

export default Row;