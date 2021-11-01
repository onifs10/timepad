import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const PieIcon: React.FC<React.PropsWithoutRef<IconProps>> = ({
  title,
  titleId,
  fill,
  stroke,
  opacity,
}) => {
  return (
    <Svg width={28} height={28} fill={fill || 'none'} aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <G
        opacity={opacity || 0.4}
        stroke={stroke || 'black'}
        strokeWidth={2}
        strokeLinecap="round">
        <Path
          d="M14.003 4.41c.287-.023.578-.035.872-.035 5.797 0 10.5 4.703 10.5 10.5s-4.703 10.5-10.5 10.5a10.505 10.505 0 01-10.001-7.293"
          strokeMiterlimit={10}
        />
        <Path
          d="M14 2.625C7.718 2.625 2.625 7.718 2.625 14a11.336 11.336 0 00.99 4.648L14 14V2.625z"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default PieIcon;
