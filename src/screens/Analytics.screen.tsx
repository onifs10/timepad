import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavList} from '../types/navigation.types';
import theme from '../theme';

type AnalyticsProps = NativeStackScreenProps<NavList, 'Analytics'>;

const Analytics: React.FC<AnalyticsProps> = ({navigation}) => {
  const goHome = () => {
    navigation.navigate('Task');
  };
  return (
    <View style={styles.pageStyle}>
      <Pressable onPress={goHome}>
        <Text>go home</Text>
      </Pressable>
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: theme.lightGray,
    flex: 1,
  },
});
