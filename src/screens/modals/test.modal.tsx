import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DonutIcon from '../../icons/donut.icon';
type modalProps = NativeStackScreenProps<{}>;

const ModalScreen: React.FC<modalProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
      <View style={{width: '100%', height: 200}}>
        <DonutIcon />
      </View>
    </View>
  );
};

export default ModalScreen;
