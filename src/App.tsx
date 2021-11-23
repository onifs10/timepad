import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './screens/BottomTab.navigtor';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from './theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ModalScreen from './screens/modals/test.modal';
import TaskModalScreen from './screens/modals/task.modal';

const RootStack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: theme.lightGray,
      }}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: theme.lightGray,
          },
        }}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Group>
            <RootStack.Screen name="App" component={BottomNavigator} />
          </RootStack.Group>
          <RootStack.Group screenOptions={{presentation: 'modal'}}>
            <RootStack.Screen name="Test" component={TaskModalScreen} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
