import * as React from 'react';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../theme';

const Header: React.FC<BottomTabHeaderProps> = ({
  layout,
  options,
  route,
  navigation,
}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={{color: theme.primary}}>Sample</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.lightGray,
  },
});
