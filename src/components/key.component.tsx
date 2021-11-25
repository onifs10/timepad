import React, {FC, PropsWithoutRef} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BackIcon from '../icons/back.icon';
import theme from '../theme';
export interface PadKeyProp<T> {
  keyValue: T;
  onPress: (n: T) => void;
  color?: string;
  textColor?: string;
  onLongPress?: (n?: T) => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PadKey: FC<PropsWithoutRef<PadKeyProp<string | number>>> = Props => {
  const borderRadius = useSharedValue(50);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: borderRadius.value,
      backgroundColor: Props.color || theme.primary,
    };
  });
  return (
    <AnimatedPressable
      style={[styles.key, animatedStyle]}
      onPressIn={() => {
        borderRadius.value = withTiming(30);
      }}
      onPressOut={() => {
        borderRadius.value = withTiming(50);
      }}
      onPress={() => {
        Props.onPress && Props.onPress(Props.keyValue);
      }}
      onLongPress={() => {
        Props.onLongPress && Props.onLongPress(Props.keyValue);
      }}>
      {Props.keyValue === 'C' ? (
        <BackIcon stroke={Props.textColor || theme.white} />
      ) : (
        <Text style={styles.keyText}>{Props.keyValue}</Text>
      )}
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  key: {
    width: 100,
    height: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: theme.lightPurple,
  },
  keyText: {
    color: 'white',
    fontSize: 25,
    fontFamily: theme.Rubik,
  },
});

export default PadKey;
