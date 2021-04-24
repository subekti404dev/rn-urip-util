import * as React from 'react';
import { TextInput, KeyboardTypeOptions, TextInputProps } from 'react-native';
import { moderateScale, scale } from "react-native-size-matters";

interface InputProps extends TextInputProps {
  width?: number;
  height?: number;
  value?: string;
  textSize?: number;
  radius?: number;
  onChangeText?: (value: string) => any;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onSubmitEditing?: () => any;
  placeholderTextColor?: string;
  borderColor?: string;
  ref?: (ref: any) => any;
}

const Input = (props: InputProps) => {
  const style = {
    width: props.width || '100%',
    height: scale(props.height || 45),
    borderColor: props.borderColor ||'grey',
    borderWidth: 1,
    borderRadius: scale(props.radius || 5),
    fontSize: moderateScale(props.textSize || 18),
    paddingHorizontal: scale(5),
  }
  return (
    <TextInput 
      style={style}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      {...props}
     />
  )
}

export default Input;