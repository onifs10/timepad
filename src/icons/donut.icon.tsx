import React from 'react';
import {Svg, Circle, Path, RadialGradient, Stop} from 'react-native-svg';

const DonutIcon: React.FC = ({}) => {
  return (
    <Svg viewBox="0 0 40 40" width="100%" height="100%">
      <Circle cx={20} cy={20} r={15.915} fill="#fff" />
      <Path
        d={arc(20, 20, 15, 359)}
        strokeWidth={1}
        stroke={'lightgray'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d={arc(20, 20, 15, 320)}
        strokeWidth={2.5}
        stroke="url(#prefix__paint0_radial_7:2098)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <RadialGradient
        id="prefix__paint0_radial_7:2098"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(132.769 8.19 4.563) scale(16.3466)">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor={'#7012CE'} />
      </RadialGradient>
    </Svg>
  );
};

const toCartesian = (x: number, y: number, radius: number, degrees: number) => {
  const radians = ((degrees - 90) * Math.PI) / 180.0;

  return {
    x: radius * Math.cos(radians) + x,
    y: radius * Math.sin(radians) + y,
  };
};

const arc = (x: number, y: number, radius: number, end: number) => {
  const head = toCartesian(x, y, radius, end);
  const tail = toCartesian(x, y, radius, 0);
  const largeArc = end <= 180 ? '0' : '1';
  return `M ${head.x} ${head.y} A ${radius} ${radius} 0 ${largeArc} 0 ${tail.x} ${tail.y}`;
};

export default DonutIcon;
