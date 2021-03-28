import * as React from "react";
import { View, TouchableOpacity, StyleProp, TextStyle } from "react-native";
import { scale } from "react-native-size-matters";
import Col from "./col";
import Gap from "./gap";
import Padder from "./padder";
import Row from "./row";
import ScaledText from "./scaled-text";

interface RadioProps {
 size?: number;
 color?: string;
 active?: boolean;
}

export const Radio = (props: RadioProps) => {
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

interface RadioButtonProps {
 label?: string;
 labelStyle?: StyleProp<TextStyle>;
 active?: boolean;
 radioSize?: number;
 fontSize?: number;
 onPress?: () => void;
 key?: number;
}
export const RadioButton = (props: RadioButtonProps) => {
 return (
  <TouchableOpacity onPress={props.onPress}>
   <Padder size={2}>
    <Row>
     <Radio size={props.radioSize} active={props.active} />
     <Gap />
     <Col justifyCenter>
      <ScaledText size={props.fontSize || 18} style={props.labelStyle}>
       {props.label}
      </ScaledText>
     </Col>
    </Row>
   </Padder>
  </TouchableOpacity>
 );
};

interface RadioButtonGroupProps {
 data?: string[];
 activeIndex?: number;
 radioSize?: number;
 fontSize?: number;
 labelStyle?: StyleProp<TextStyle>;
 onChange?: ({ value: string, index: number }) => void;
}

export const RadioButtonGroup = (props: RadioButtonGroupProps) => {
 const [active, setActive] = React.useState(props.activeIndex);

 return (
  <View>
   {(props.data || []).map((data: string, index: number) => {
    const isActive = active === index;
    const onPress = () => {
     if (props.onChange) props.onChange({ value: data, index });
     setActive(index);
    };
    return (
     <RadioButton
      key={index}
      label={data}
      labelStyle={props.labelStyle}
      radioSize={props.radioSize}
      fontSize={props.fontSize}
      onPress={onPress}
      active={isActive}
     />
    );
   })}
  </View>
 );
};
