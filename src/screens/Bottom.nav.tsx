import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import AddIcon from '../icons/add.icon';
import ClockIcon from '../icons/clock.icon';
import PieIcon from '../icons/pieChart.icon';
import theme from '../theme';
// import theme from '../theme';
// import AddIcon from '../icons/add.icon';
// import ClockIcon from '../icons/clock.icon';

const BottomNav: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.navs}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          //home
          let routeName = route.name.toLowerCase();
          if (routeName === 'home') {
            return (
              <Pressable
                key={index}
                onPress={onPress}
                onLongPress={onLongPress}>
                <ClockIcon
                  stroke={isFocused ? theme.white : theme.gray}
                  fill={isFocused ? theme.primary : theme.white}
                  opacity={isFocused ? 1 : 0.5}
                />
              </Pressable>
            );

            //add
          } else if (routeName === 'add') {
            return (
              <Pressable
                key={index}
                onPress={onPress}
                onLongPress={onLongPress}>
                <AddIcon
                  stroke={theme.white}
                  fill={theme.primary}
                  opacity={isFocused ? 1 : 0.8}
                />
              </Pressable>
            );

            //analytics
          } else if (routeName === 'analytics') {
            return (
              <Pressable
                key={index}
                onPress={onPress}
                onLongPress={onLongPress}>
                <PieIcon
                  stroke={isFocused ? theme.white : theme.gray}
                  fill={isFocused ? theme.primary : theme.white}
                  opacity={isFocused ? 1 : 0.5}
                />
              </Pressable>
            );
          } else {
            return <Text>{label}</Text>;
          }
        })}
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  navs: {
    display: 'flex',
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 'auto',
    minHeight: 70,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  navContainer: {
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    display: 'flex',
    elevation: 2,
    width: '100%',
    backgroundColor: theme.lightGray,
  },
});
