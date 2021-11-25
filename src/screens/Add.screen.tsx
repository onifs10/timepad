import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavList} from '../types/navigation.types';

import theme from '../theme';
import PadKey from '../components/key.component';

type AddProps = NativeStackScreenProps<NavList, 'Add'>;

const Add: React.FC<AddProps> = () => {
  const [timeString, setTime] = useState<string>('000000');
  const [timeInput, setTimeInput] = useState<string>('');

  const handleChange = (value: string | number) => {
    if (value === '0' || value === '00') {
      if (timeInput.length === 0) {
        return;
      }
    }
    if (value === 'C') {
      setTimeInput(value => {
        return value.substr(0, value.length - 1);
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
  useEffect(() => {
    setTime(
      '0'.repeat(Math.max(6 - timeInput.length, 0)) + timeInput.substr(0, 6),
    );
  }, [timeInput]);

  return (
    <View style={styles.pageStyle}>
      <View style={styles.timeShow}>
        <View style={styles.timeTextView}>
          <Text style={styles.timeText}>
            {timeString.substr(0, 2)}
            <Text style={styles.timeType}>hh</Text>
          </Text>
        </View>
        <View style={styles.timeTextView}>
          <Text style={styles.timeText}>
            {timeString.substr(2, 2)}
            <Text style={styles.timeType}>mm</Text>
          </Text>
        </View>
        <View style={styles.timeTextView}>
          <Text style={styles.timeText}>
            {timeString.substr(4, 2)}
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
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: theme.lightGray,
    flex: 1,
    paddingHorizontal: 40,
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
    flex: 1,
    // backgroundColor: 'red',
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
});
