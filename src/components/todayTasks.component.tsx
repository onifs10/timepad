import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {PropsWithoutRef} from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import theme from '../theme';
import {NavList} from '../types/navigation.types';
import Task from './task.component';
import {useAppContext} from '../contexts/storage.context';

export interface TodayTasksProps {
  navigation: NativeStackNavigationProp<NavList, 'Task'>;
}

// const tasks: TaskType[] = [
//   {
//     id: 1,
//     name: 'UI Design',
//     tags: ['work', 'Rasion Project'],
//     time: '00:32:10',
//     seconds: 10000,
//   },
//   {
//     id: 2,
//     name: 'UI Design',
//     tags: ['work', 'Rasion Project'],
//     time: '00:32:10',
//     seconds: 10000,
//   },
//   {
//     id: 3,
//     name: 'UI Design',
//     tags: ['work', 'Rasion Project'],
//     time: '00:32:10',
//     seconds: 10000,
//   },
//   {
//     id: 4,
//     name: 'UI Design',
//     tags: ['work', 'Rasion Project'],
//     time: '00:32:10',
//     seconds: 10000,
//   },
//   {
//     id: 5,
//     name: 'UI Design',
//     tags: ['work', 'Rasion Project'],
//     time: '00:32:10',
//     seconds: 10000,
//   },
//   {
//     id: 6,
//     name: 'UI Design',
//     tags: ['work', 'Rasion Project'],
//     time: '00:32:10',
//     seconds: 10000,
//   },
// ];

const TodayTasks: React.FC<PropsWithoutRef<TodayTasksProps>> = ({
  navigation,
}) => {
  const handleNavigation = (id: string) => {
    navigation.navigate('Test', {id});
  };
  const {tasks} = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextOne}>Today</Text>
        <Pressable onPress={() => navigation.navigate('Test', {id: '1'})}>
          <Text style={styles.headerTextTwo}>See All</Text>
        </Pressable>
      </View>
      <FlatList
        data={tasks}
        style={styles.tasks}
        renderItem={({item}) => (
          <Task task={item} navigate={handleNavigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTextTwo: {
    color: theme.primary,
    fontSize: 20,
    fontFamily: theme.Rubik,
  },
  headerTextOne: {
    color: theme.primary,
    fontSize: 20,
    fontFamily: theme.RubikSemiBold,
  },
  tasks: {
    marginTop: 10,
  },
});

export default TodayTasks;
