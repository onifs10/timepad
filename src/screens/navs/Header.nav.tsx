import * as React from 'react';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import theme from '../../theme';
import BackIcon from '../../icons/back.icon';
import MoreIcon from '../../icons/more.icon';

const Header: React.FC<BottomTabHeaderProps> = ({route, navigation}) => {
  const handleGoback = () => {
    navigation.navigate('Task');
  };
  return (
    <View style={[styles.headerContainer]}>
      {route.name.toLowerCase() === 'analytics' && (
        <Pressable style={styles.sides} onPress={handleGoback}>
          <BackIcon fill={theme.primary} />
        </Pressable>
      )}
      <View style={[styles.sides]}>
        <Text style={styles.text}>{route.name}</Text>
      </View>
      <Pressable style={[styles.sides, styles.left]}>
        <MoreIcon fill={theme.primary} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.lightGray,
    width: '100%',
    height: 60,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: theme.primary,
    fontSize: 24,
    fontWeight: '500',
  },
  sides: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'flex-end',
  },
  left: {
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
});
