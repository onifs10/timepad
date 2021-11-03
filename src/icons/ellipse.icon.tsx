import * as React from 'react';
import Svg, {Circle, Defs, RadialGradient, Stop} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const EllipseIcon = ({title, titleId, fill}: IconProps) => {
  return (
    <Svg width={12} height={12} fill="none" aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Circle
        cx={6}
        cy={6}
        r={5.3}
        stroke="url(#prefix__paint0_radial_7:2098)"
        strokeWidth={1.4}
      />
      <Defs>
        <RadialGradient
          id="prefix__paint0_radial_7:2098"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(132.769 8.19 4.563) scale(16.3466)">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor={fill || '#7012CE'} />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export default EllipseIcon;
