import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const AddIcon: React.FC<React.PropsWithoutRef<IconProps>> = ({
  fill,
  stroke,
  opacity,
  title,
  titleId,
  scale,
}) => {
  return (
    <Svg
      width={44 * (scale || 1)}
      height={44 * (scale || 1)}
      fill="none"
      aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Circle cx={22} cy={22} r={22} fill={fill || 'none'} />
      <G opacity={opacity || 0.4}>
        <Path
          d="M29 21h-6v-6a1 1 0 00-2 0v6h-6a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z"
          fill={stroke || 'black'}
        />
      </G>
    </Svg>
  );
};

export default AddIcon;
