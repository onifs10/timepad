import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const MoreIcon = ({title, titleId, fill}: IconProps) => {
  return (
    <Svg width={24} height={24} fill="none" aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M12 10a2 2 0 100 4 2 2 0 000-4zm-7 0a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4z"
        fill={fill || 'black'}
      />
    </Svg>
  );
};

export default MoreIcon;
