import * as React from "react";
import { View, ImageSourcePropType, ImageBackground } from "react-native";
import { scale } from "react-native-size-matters";

interface BoxProps {
 width?: number;
 height?: number;
 fullWidth?: boolean;
 fullHeight?: boolean;
 color?: string;
 children?: any;
 borderRadius?: number;
 backgroundImage?: ImageSourcePropType;
 opacity?: number;
}

const Box = (props: BoxProps) => {
 let width: number | string = scale(props.width || 100);
 let height: number | string = scale(props.height || 100);
 if (props.fullWidth) width = "100%";
 if (props.fullHeight) height = "100%";
 const borderRadius = scale(props.borderRadius || 0);
 const opacity = props.opacity || 1;
 const backgroundColor = props.color || "transparent";

 const Component = props.backgroundImage ? ImageBackground : View;

 return (
  <Component
   source={props.backgroundImage}
   style={{
    width,
    height,
    borderRadius,
    opacity,
    backgroundColor,
   }}
   borderRadius={borderRadius}
  >
   {props.children}
  </Component>
 );
};

export default Box;
