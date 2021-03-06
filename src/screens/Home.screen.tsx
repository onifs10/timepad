import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeadlineTask from '../components/headlineTask.component';
import TodayTasks from '../components/todayTasks.component';
import theme from '../theme';
import {TaskType} from '../types/components.types';
import {NavList} from '../types/navigation.types';

type HomeProps = NativeStackScreenProps<NavList, 'Task'>;

const Home: React.FC<HomeProps> = ({navigation}) => {
  const headlineTaskData: TaskType = {
    id: 1,
    name: 'UI Design',
    tags: ['work', 'Rasion Project'],
    time: '00:32:10',
    seconds: 1000,
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <HeadlineTask navigation={navigation} task={headlineTaskData} />
      </View>
      <View style={[styles.sectionContainer, styles.taskList]}>
        <TodayTasks navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: theme.lightGray, flex: 1},
  sectionContainer: {
    paddingHorizontal: 20,
  },
  taskList: {
    flex: 1,
    paddingTop: 10,
  },
});

export default Home;
