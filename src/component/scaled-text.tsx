import * as React from "react";
import { Text, StyleProp, TextStyle } from "react-native";
import { moderateScale } from "react-native-size-matters";

interface ScaledTextProps {
 children?: string | number;
 size?: number;
 color?: string;
 weight?:
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
 lineHeight?: number;
 italic?: boolean;
 underline?: boolean;
 bold?: boolean;
 uppercase?: boolean;
 right?: boolean;
 style?: StyleProp<TextStyle>;
}

const ScaledText = (props: ScaledTextProps) => {
 let text = props.children;
 const style: any = {};
 style.fontSize = moderateScale(props.size || 16);
 if (props.right) style.textAlign = "right";
 if (props.lineHeight) style.lineHeight = moderateScale(props.lineHeight);
 if (props.color) style.color = props.color;
 if (props.weight) style.fontWeight = props.weight;
 if (props.bold) style.fontWeight = "bold";
 if (props.italic) style.fontStyle = "italic";
 if (props.underline) style.textDecorationLine = "underline";
 if (text && props.uppercase && typeof text === "string") {
  text = text.toUpperCase();
 }
 return <Text style={[style, props.style]}>{text}</Text>;
};

export default ScaledText;
