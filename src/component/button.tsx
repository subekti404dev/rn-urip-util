import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { moderateScale, scale } from "react-native-size-matters";

interface ButtonProps {
  label: string;
  labelColor: string;
  onPress?: () => void;
  disabled?: boolean;
  type?: 'block' | 'bordered';
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  radius?: number;
  width?: number;
  height?: number;
}

const Button = (props: ButtonProps) => {
  const type = props.type || 'block';
  const isBlock = type === 'block';
  let color = props.color || 'purple';
  if (props.disabled) {
    color = `#E4E6E9`;
  }
  const style = {
    backgroundColor: isBlock ?  (props.backgroundColor || color) : '#FFF',
    borderColor: props.borderColor || color,
    borderWidth: scale(2),
    borderRadius: props.radius || scale(5),
    height: props.height || scale(45),
    width: props.width || '100%',
  }
  const labelStyle = {
    fontSize: moderateScale(17),
    color: props.labelColor || (isBlock ? '#FFF' : color)
  }
  return (
    <TouchableOpacity onPress={props.onPress} style={style}>
      <Text style={labelStyle}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default Button;