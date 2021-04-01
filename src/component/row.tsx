import * as React from "react";
import { View, StyleProp, ViewStyle, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

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
 center?: boolean;
 color?: string;
 height?: number;
 onPress?: () => void;
}

const Row = (props: RowProps) => {
 const flex = props.size || 1;
 const style: any = props.style || {};
 style.flex = flex;
 style.flexDirection = "row";
 if (props.justifyStart) style.justifyContent = "flext-start";
 if (props.justifyCenter) style.justifyContent = "center";
 if (props.justifyEnd) style.justifyContent = "flex-end";
 if (props.alignStart) style.alignItems = "flex-start";
 if (props.alignCenter) style.alignItems = "center";
 if (props.alignEnd) style.alignItems = "flex-end";
 if (props.color) style.backgroundColor = props.color;
 if (props.center) {
  style.alignItems = "center";
  style.justifyContent = "center";
 }
 if (props.height) {
  style.height = scale(props.height);
  delete style.flex;
 }
 const Component = props.onPress ? TouchableOpacity : View;

 return (
  <Component onPress={props.onPress} style={style}>
   {props.children}
  </Component>
 );
};

export default Row;
