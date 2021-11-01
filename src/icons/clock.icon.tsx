import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const ClockIcon: React.FC<React.PropsWithoutRef<IconProps>> = ({
  fill,
  stroke,
  title,
  titleId,
  opacity,
  scale,
}) => {
  return (
    <Svg
      width={24 * (scale || 1)}
      height={24 * (scale || 1)}
      fill={fill || 'none'}
      aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <G opacity={opacity || 0.4}>
        <Path
          d="M12 3c-4.969 0-9 4.031-9 9s4.031 9 9 9 9-4.031 9-9-4.031-9-9-9z"
          stroke={stroke || 'black'}
          strokeWidth={2}
          strokeMiterlimit={10}
        />
        <Path
          d="M12 6v6.75h4.5"
          stroke={stroke || 'black'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default ClockIcon;
