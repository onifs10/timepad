import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {PropsWithoutRef, useContext, useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import TimeContext from '../contexts/time.context';
import EllipseIcon from '../icons/ellipse.icon';
import ForwardIcon from '../icons/forward.icon';
import theme from '../theme';
import {TaskType} from '../types/components.types';
import {NavList} from '../types/navigation.types';
import {toHHMMSS} from '../utils/time.util';

export interface HeadlinePropTypes {
  navigation: NativeStackNavigationProp<NavList, 'Task'>;
  task: TaskType;
}

const HeadlineTask: React.FC<PropsWithoutRef<HeadlinePropTypes>> = ({
  navigation,
  task,
}) => {
  const {sub} = useContext(TimeContext);
  let [subscriptionObj, setSubObj] = useState<{release: () => void} | null>(
    null,
  );
  const [seconds, setseconds] = useState<number>(task.seconds);

  const updateTime = () => {
    setseconds(value => {
      if (value) {
        return value - 1;
      } else {
        return 0;
      }
    });
  };

  // track seconds
  useEffect(() => {
    if (seconds <= 0) {
      subscriptionObj?.release();
    }
  }, [seconds, subscriptionObj]);

  useEffect(() => {
    const subObj = sub(updateTime);
    setSubObj(subObj);
    return () => {
      subscriptionObj?.release();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.time}>{toHHMMSS(seconds)}</Text>
        <Pressable onPress={() => navigation.navigate('Test', {id: 1})}>
          <ForwardIcon />
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <EllipseIcon />
        <Text style={styles.bottomText}>{task.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: theme.primary,
    color: 'white',
    borderRadius: 10,
    height: 114,
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  top: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    color: theme.white,
    textAlign: 'right',
    fontSize: 32,
    fontFamily: 'Rubik-Bold',
    fontWeight: '500',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    color: theme.white,
    paddingLeft: 7,
    fontSize: 16,
    fontFamily: theme.RubikMeduim,
  },
});
export default HeadlineTask;
