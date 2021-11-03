import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavList} from '../types/navigation.types';

import theme from '../theme';

type AddProps = NativeStackScreenProps<NavList, 'Add'>;

const Add: React.FC<AddProps> = ({navigation}) => {
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

export default Add;

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: theme.lightGray,
    flex: 1,
  },
});
