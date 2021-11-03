import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const PlayIcon = ({title, titleId, fill}: IconProps) => {
  return (
    <Svg width={24} height={24} fill="none" aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M6.234 20.625c-.287 0-.57-.076-.82-.219a1.844 1.844 0 01-.912-1.61V5.204c0-.674.35-1.29.912-1.61a1.647 1.647 0 011.677.022l11.618 6.954a1.689 1.689 0 010 2.86l-11.62 6.956a1.664 1.664 0 01-.855.24z"
        fill={fill || '#828282'}
      />
    </Svg>
  );
};

export default PlayIcon;
