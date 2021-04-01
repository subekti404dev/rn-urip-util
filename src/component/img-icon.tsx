import * as React from "react";
import { View, TouchableOpacity, ImageSourcePropType, Image } from "react-native";
import { scale } from "react-native-size-matters";
import Padder from "./padder";

interface ImgIconProps {
 source: ImageSourcePropType;
 onPress?: () => void;
 size?: number;
 padding?: number;
 tintColor?: string;
}

const ImgIcon = (props: ImgIconProps) => {
 const Container = props.onPress ? TouchableOpacity : View;
 const size = props.size || 24;

 return (
  <Container onPress={props.onPress}>
   <Padder size={props.padding || 3}>
    <Image
     source={props.source}
     style={{
      width: scale(size),
      height: scale(size),
      resizeMode: "contain",
      tintColor: props.tintColor || "rbga(0,0,0,0.8)",
     }}
    />
   </Padder>
  </Container>
 );
};

export default ImgIcon;
