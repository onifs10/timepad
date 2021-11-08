import * as React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import theme from '../../theme';
import EllipseIcon from '../../icons/ellipse.icon';
import DonutIcon from '../../icons/donut.icon';
import PauseIcon from '../../icons/pause.icon';
import QuitIcon from '../../icons/quit.icon';
type modalProps = NativeStackScreenProps<{}>;
const TaskModalScreen: React.FC<modalProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <View style={styles.dash} />
        </Pressable>
        <View style={styles.header}>
          <Text style={styles.title}>Rasion Project</Text>
          <Text style={styles.tag}>work</Text>
        </View>
        <View style={styles.category}>
          <EllipseIcon />
          <Text style={styles.categoryName}>UI Design</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.timer}>
            <DonutIcon percent={30} />
            <View style={styles.timerTextWrapper}>
              <Text style={styles.timerText}>1:30</Text>
            </View>
          </View>
          <View style={styles.actions}>
            <View style={styles.action}>
              <Pressable style={styles.actionIcon}>
                <PauseIcon />
              </Pressable>
              <Text style={styles.actionLabel}>Pause</Text>
            </View>
            <View style={styles.action}>
              <Pressable style={styles.actionIcon}>
                <QuitIcon />
              </Pressable>
              <Text style={styles.actionLabel}>Quit</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: theme.lightGray,
  },
  modal: {
    height: '95%',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: theme.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  back: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dash: {
    width: '10%',
    height: 5,
    backgroundColor: theme.lightPurple,
    borderRadius: 5,
  },
  text: {
    color: theme.primary,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: theme.primary,
    fontFamily: theme.RubikSemiBold,
  },
  tag: {
    marginRight: 4,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
    color: theme.purple,
    backgroundColor: '#F5EEFC',
  },
  category: {
    width: '100%',
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    color: theme.primary,
    paddingLeft: 10,
    fontFamily: theme.Rubik,
  },
  body: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 100,
  },
  timer: {
    width: '80%',
    height: 300,
    marginBottom: 50,
  },
  timerTextWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: theme.RubikSemiBold,
    color: theme.primary,
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  action: {
    alignItems: 'center',
  },
  actionLabel: {
    marginTop: 5,
    fontSize: 14,
    color: theme.primary,
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.lightPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskModalScreen;
