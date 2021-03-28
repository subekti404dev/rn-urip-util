import * as React from 'react'
import { View } from 'react-native'
import { scale } from 'react-native-size-matters'

interface GapProps {
  size?: number;
  vertical?: boolean;
}

const Gap = (props: GapProps) => {
  const isHorizontal = props.vertical ? false : true;
  const width = isHorizontal ?  scale(props.size || 10) : 0;
  const height = isHorizontal ?  0 : scale(props.size || 10);
  return (
    <View style={{width, height}}/>
  )
}

export default Gap;