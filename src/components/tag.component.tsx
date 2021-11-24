import React, {PropsWithoutRef} from 'react';
import {StyleSheet, Text} from 'react-native';
import shadeHexColor from '../utils/color.util';
export interface TagProps {
  color: string;
  children: string;
}

const Tag: React.FC<PropsWithoutRef<TagProps>> = Props => {
  const BackgroundColor = shadeHexColor(Props.color, 0.9);
  return (
    <Text
      style={[
        tagStyles.tag,
        {backgroundColor: BackgroundColor!, color: Props.color},
      ]}>
      {Props.children}
    </Text>
  );
};

export default Tag;

const tagStyles = StyleSheet.create({
  tag: {
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
});
