import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {IconProps} from '../types/icons.type';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const AddIcon: React.FC<React.PropsWithoutRef<IconProps>> = ({
  fill,
  stroke,
  opacity,
  title,
  titleId,
  scale,
  isFocused,
}) => {
  const shareFocused = useSharedValue(1);

  const svgProps = useAnimatedProps(() => {
    let value = 44 * (scale || shareFocused.value || 1);
    return {
      width: value,
      height: value,
    };
  });

  React.useEffect(() => {
    if (isFocused) {
      shareFocused.value = withTiming(1, {
        easing: Easing.circle,
        duration: 100,
      });
    } else {
      shareFocused.value = withTiming(0.8, {
        easing: Easing.circle,
        duration: 200,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  return (
    <AnimatedSvg
      animatedProps={svgProps}
      viewBox={'0 0 44 44'}
      fill="none"
      aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <Circle cx={22} cy={22} r={22} fill={fill || 'none'} />
      <G opacity={opacity || 1}>
        <Path
          d="M29 21h-6v-6a1 1 0 00-2 0v6h-6a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z"
          fill={stroke || 'black'}
        />
      </G>
    </AnimatedSvg>
  );
};

export default AddIcon;
