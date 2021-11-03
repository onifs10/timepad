import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const ForwardIcon = ({title, titleId, fill}: IconProps) => {
  return (
    <Svg width={24} height={24} fill="none" aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M15.5 11.2L9.8 5.6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.9 5-4.9 5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5.7-5.6c.4-.5.4-1.1 0-1.6 0 .1 0 .1 0 0z"
        fill={fill || '#fff'}
      />
    </Svg>
  );
};

export default ForwardIcon;
