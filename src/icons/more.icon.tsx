import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

function MoreIcon({title, titleId, fill}: IconProps) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={fill || 'none'}
      aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M12 10a2 2 0 100 4 2 2 0 000-4zm-7 0a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4z"
        fill={fill || 'none'}
      />
    </Svg>
  );
}

export default MoreIcon;
