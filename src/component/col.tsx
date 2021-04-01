import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

interface ColProps {
  children?: any;
  size?: number;
  style?: StyleProp<ViewStyle>;
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  center?: boolean;
  color?: string;
}

 const Col = (props: ColProps) => {
  const flex = props.size || 1;
  const style: any = props.style || {};
  style.flex = flex;
  style.flexDirection = 'column';
  if (props.justifyStart) style.justifyContent = 'flext-start';
  if (props.justifyCenter) style.justifyContent = 'center';
  if (props.justifyEnd) style.justifyContent = 'flex-end';
  if (props.alignStart) style.alignItems = 'flex-start';
  if (props.alignCenter) style.alignItems = 'center';
  if (props.alignEnd) style.alignItems = 'flex-end';
  if (props.color) style.backgroundColor = props.color;
  if (props.center) {
    style.alignItems = 'center';
    style.justifyContent = 'center';
  }
  return (
    <View style={style}>
      {props.children}
    </View>
  );
};

export default Col;