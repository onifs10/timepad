import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const DesignIcon = ({title, titleId, fill}: IconProps) => {
  return (
    <Svg width={44} height={44} fill="none" aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Circle cx={22} cy={22} r={22} fill={fill || '#9B51E0'} />
      <Path
        d="M31 13H13a1.5 1.5 0 00-1.5 1.5v12A1.5 1.5 0 0013 28h18a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0031 13z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M24.25 31l-.375-3h-3.75l-.375 3h4.5z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.25 31h-10.5"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5 24.25v2.25A1.504 1.504 0 0013 28h18a1.504 1.504 0 001.5-1.5v-2.25h-21zm10.5 3a.75.75 0 110-1.5.75.75 0 010 1.5z"
        fill="#fff"
      />
    </Svg>
  );
};

export default DesignIcon;
