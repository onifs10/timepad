import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import theme from '../theme';
import {NavList} from '../types/navigation.types';

type HomeProps = NativeStackScreenProps<NavList, 'Task'>;

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{backgroundColor: theme.lightGray}}>
      <View style={styles.sectionContainer}>
        <Text>sample</Text>
        <Pressable onPress={() => navigation.navigate('Test')}>
          <Text style={{color: theme.primary}}>open modal</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
