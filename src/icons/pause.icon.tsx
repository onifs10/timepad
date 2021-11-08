import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../types/icons.type';

const PauseIcon: React.FC<React.PropsWithoutRef<IconProps>> = ({
  title,
  titleId,
  fill,
}) => {
  return (
    <Svg width={24} height={24} fill="none" aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M9 20H6c-.265 0-.52-.077-.707-.213-.188-.136-.293-.321-.293-.514V4.727c0-.193.105-.378.293-.514C5.48 4.077 5.735 4 6 4h3c.265 0 .52.077.707.213.188.136.293.321.293.514v14.546c0 .193-.105.378-.293.514A1.215 1.215 0 019 20zM18 20h-3c-.265 0-.52-.077-.707-.213-.188-.136-.293-.321-.293-.514V4.727c0-.193.105-.378.293-.514C14.48 4.077 14.735 4 15 4h3c.265 0 .52.077.707.213.188.136.293.321.293.514v14.546c0 .193-.105.378-.293.514A1.215 1.215 0 0118 20z"
        fill={fill || '#828282'}
      />
    </Svg>
  );
};

export default PauseIcon;
