import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation.types';

type SampleProps = NativeStackScreenProps<RootStackParamList, 'Sample'>;

const Sample: React.FC<SampleProps> = ({navigation}) => {
  const goHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View>
      <Pressable onPress={goHome}>
        <Text>go home</Text>
      </Pressable>
    </View>
  );
};

export default Sample;
