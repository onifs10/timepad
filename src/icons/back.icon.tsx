import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const BackIcon: React.FC<React.PropsWithoutRef<IconProps>> = ({stroke}) => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M11.438 18.75L4.688 12l6.75-6.75M5.625 12h13.688"
        stroke={stroke || 'black'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackIcon;
