import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {
  Platform,
  Keyboard,
  View,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import AddIcon from '../../icons/add.icon';
import ClockIcon from '../../icons/clock.icon';
import PieIcon from '../../icons/pieChart.icon';
import theme from '../../theme';
// import theme from '../theme';
// import AddIcon from '../icons/add.icon';
// import ClockIcon from '../icons/clock.icon';

// @ts-ignore
const BottomNav: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    let keyboardEventListeners: Array<any>;
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListeners &&
          keyboardEventListeners.forEach(eventListener =>
            eventListener.remove(),
          );
      }
    };
  }, []);

  return (
    visible && (
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
                // @ts-ignore
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
            if (routeName === 'task') {
              return (
                <Pressable
                  key={index}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={styles.nav}>
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
                  onLongPress={onLongPress}
                  style={styles.nav}>
                  <AddIcon
                    stroke={theme.white}
                    fill={theme.primary}
                    isFocused={isFocused}
                  />
                </Pressable>
              );

              //analytics
            } else if (routeName === 'analytics') {
              return (
                <Pressable
                  key={index}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={styles.nav}>
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
    )
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  navs: {
    display: 'flex',
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-around',

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
  nav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
