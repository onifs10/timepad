import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavList} from '../types/navigation.types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import PadKey from '../components/key.component';
import theme from '../theme';
import {Picker} from '@react-native-picker/picker';
import {CATEGORY, TASK} from '../types/storage.types';
import {useAppContext} from '../contexts/storage.context';
import uuid from 'react-native-uuid';

type AddProps = NativeStackScreenProps<NavList, 'Add'>;
const AimatedPressable = Animated.createAnimatedComponent(Pressable);

const Add: React.FC<AddProps> = () => {
  const [timeString, setTime] = useState<string>('000000');
  const [timeInput, setTimeInput] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [selectedCategory, setCategory] = useState<CATEGORY>();
  const {addTask} = useAppContext();

  const handleChange = (value: string | number) => {
    if (value === '0' || value === '00') {
      if (timeInput.length === 0) {
        return;
      }
    }
    if (value === 'C') {
      setTimeInput(time => {
        return time.substring(0, time.length - 1);
      });
    } else {
      setTimeInput(old => {
        if (old.length < 6) {
          return old + value;
        }
        return old;
      });
    }
  };
  const clearInput = () => {
    setTimeInput('');
  };

  const handleAddtask = async () => {
    try {
      if (name && +timeInput && selectedCategory) {
        const [hours, minutes, secs] = [
          timeString.substring(0, 2),
          timeString.substring(2, 4),
          timeString.substring(4, 6),
        ];

        const timeInsec = +hours * 3600 + +minutes * 60 + +secs;
        console.warn(timeInsec);
        const task: TASK = {
          id: uuid.v4() as string,
          name,
          time: timeInsec.toString(),
          category: selectedCategory,
        };
        await addTask(task);

        setName('');
        setCategory(undefined);
        setTimeInput('');
      } else {
        return;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const animatedValue = useSharedValue(0.7);
  const butttonStyle = useAnimatedStyle(() => {
    return {
      width: `${50 * animatedValue.value}%`,
      height: 60 * animatedValue.value,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: theme.primary,
      opacity: animatedValue.value,
    };
  });
  useEffect(() => {
    setTime(
      '0'.repeat(Math.max(6 - timeInput.length, 0)) + timeInput.substring(0, 6),
    );
  }, [timeInput]);

  useEffect(() => {
    if (name && +timeInput && selectedCategory) {
      animatedValue.value = withTiming(1);
    } else {
      animatedValue.value = withTiming(0.7);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, timeString, selectedCategory]);
  return (
    <ScrollView style={styles.pageStyle}>
      <View style={styles.timeShow}>
        <View style={styles.timeTextView}>
          <Text style={styles.timeText}>
            {timeString.substring(0, 2)}
            <Text style={styles.timeType}>hh</Text>
          </Text>
        </View>
        <View style={styles.timeTextView}>
          <Text style={styles.timeText}>
            {timeString.substring(2, 4)}
            <Text style={styles.timeType}>mm</Text>
          </Text>
        </View>
        <View style={styles.timeTextView}>
          <Text style={styles.timeText}>
            {timeString.substring(4, 6)}
            <Text style={styles.timeType}>ss</Text>
          </Text>
        </View>
      </View>
      <View style={styles.pads}>
        <View style={styles.keyRow}>
          <PadKey keyValue={'1'} onPress={handleChange} />
          <PadKey keyValue={'2'} onPress={handleChange} />
          <PadKey keyValue={'3'} onPress={handleChange} />
        </View>
        <View style={styles.keyRow}>
          <PadKey keyValue={'4'} onPress={handleChange} />
          <PadKey keyValue={'5'} onPress={handleChange} />
          <PadKey keyValue={'6'} onPress={handleChange} />
        </View>
        <View style={styles.keyRow}>
          <PadKey keyValue={'7'} onPress={handleChange} />
          <PadKey keyValue={'8'} onPress={handleChange} />
          <PadKey keyValue={'9'} onPress={handleChange} />
        </View>
        <View style={styles.keyRow}>
          <PadKey keyValue={'00'} onPress={handleChange} />
          <PadKey keyValue={'0'} onPress={handleChange} />
          <PadKey
            keyValue={'C'}
            onPress={handleChange}
            onLongPress={clearInput}
            color={theme.purple}
          />
        </View>
      </View>
      <View style={styles.nameView}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={name}
          onChangeText={val => setName(val)}
          placeholderTextColor={theme.primary}
        />
      </View>
      <View style={styles.picker}>
        <Picker
          mode="dropdown"
          dropdownIconColor={theme.primary}
          dropdownIconRippleColor={theme.lightPurple}
          style={{
            color: theme.primary,
          }}
          onValueChange={(value, _) => {
            setCategory(value);
          }}
          selectedValue={selectedCategory}>
          <Picker.Item label="Select a category" />
          <Picker.Item label="Work" value={CATEGORY.WORK} />
          <Picker.Item label="Workout" value={CATEGORY.WORKOUT} />
          <Picker.Item label="Others" value={CATEGORY.OTHERS} />
        </Picker>
      </View>
      <View style={styles.buttonView}>
        <AimatedPressable
          style={butttonStyle}
          disabled={!(name && +timeString && selectedCategory)}
          onPress={handleAddtask}>
          <Text style={styles.buttonText}>Add</Text>
        </AimatedPressable>
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1.5,
    borderColor: theme.primary,
    borderRadius: 15,
    fontFamily: theme.Rubik,
    marginBottom: 10,
  },
  pageStyle: {
    backgroundColor: theme.lightGray,
    // flex: 1,
    paddingHorizontal: 40,
    overflow: 'scroll',
  },
  textInput: {
    width: '100%',
    height: 60,
    borderColor: theme.primary,
    borderWidth: 1.5,
    color: theme.primary,
    fontFamily: theme.Rubik,
    fontSize: 20,
    borderRadius: 15,
    padding: 10,
    letterSpacing: 1,
  },
  timeShow: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    color: theme.primary,
    fontFamily: theme.Rubik,
    fontSize: 50,
  },
  pads: {
    paddingBottom: 10,
  },
  keyRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  key: {
    width: 100,
    height: 100,
    padding: 10,
    borderRadius: 50,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    color: 'white',
    fontSize: 25,
    fontFamily: theme.Rubik,
  },
  timeTextView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  timeType: {
    fontSize: 15,
    color: theme.primary,
    fontFamily: theme.Rubik,
    padding: 0,
    margin: 0,
  },
  buttonView: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  buttonText: {
    color: theme.white,
    fontFamily: theme.RubikSemiBold,
  },
  nameView: {
    marginBottom: 10,
  },
});
