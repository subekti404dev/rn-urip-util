import * as React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";

interface RadioProps {
 size?: number;
 color?: string;
 active?: boolean;
}

const Radio = (props: RadioProps) => {
 let size = scale(23);
 if (props.size) {
  const isOdd = props.size % 2 === 1;
  size = isOdd ? scale(props.size + 1) : scale(props.size);
 }
 const color = props.color || "purple";

 return (
  <View
   style={{
    height: size,
    width: size,
    borderWidth: 3,
    borderRadius: size / 2,
    borderColor: color,
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   {props.active && (
    <View
     style={{
      height: size / 2,
      width: size / 2,
      borderRadius: size / 4,
      backgroundColor: color,
     }}
    />
   )}
  </View>
 );
};

export default Radio;
