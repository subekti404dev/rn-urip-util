import * as React from 'react';
import { TextInput, View, KeyboardTypeOptions } from 'react-native';
import { scale } from "react-native-size-matters";

interface InputProps {
  width?: number;
  height?: number;
  value?: string;
  onChangeText?: (value: string) => any;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onSubmitEditing?: () => any;
  placeholderTextColor?: string;
}

const Input = (props: InputProps) => {
  const style = {
    width: props.width || '100%',
    height: props.height || scale(45),
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: scale(5)
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