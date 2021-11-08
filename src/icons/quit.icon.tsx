import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const QuitIcon: React.FC<React.PropsWithoutRef<IconProps>> = ({
  title,
  titleId,
  fill,
}) => {
  return (
    <Svg width={24} height={24} fill="none" aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z"
        fill={fill || '#828282'}
      />
    </Svg>
  );
};

export default QuitIcon;
