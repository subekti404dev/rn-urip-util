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
 justifyStart?: boolean;
 justifyCenter?: boolean;
 justifyEnd?: boolean;
 alignStart?: boolean;
 alignCenter?: boolean;
 alignEnd?: boolean;
}

const Box = (props: BoxProps) => {
 const style: any = {};
 if (props.justifyStart) style.justifyContent = "flext-start";
 if (props.justifyCenter) style.justifyContent = "center";
 if (props.justifyEnd) style.justifyContent = "flex-end";
 if (props.alignStart) style.alignItems = "flex-start";
 if (props.alignCenter) style.alignItems = "center";
 if (props.alignEnd) style.alignItems = "flex-end";

 style.width = scale(props.width || 100);
 style.height = scale(props.height || 100);
 if (props.fullWidth) style.width = "100%";
 if (props.fullHeight) style.height = "100%";

 style.borderRadius = scale(props.borderRadius || 0);
 style.opacity = props.opacity || 1;
 style.backgroundColor = props.color || "transparent";

 const Component = props.backgroundImage ? ImageBackground : View;

 return (
  <Component
   source={props.backgroundImage}
   style={style}
   borderRadius={style.borderRadius}
  >
   {props.children}
  </Component>
 );
};

export default Box;
