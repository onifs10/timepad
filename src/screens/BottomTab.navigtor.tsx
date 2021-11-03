import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home.screen';
import Add from './Add.screen';
import {NavList} from '../types/navigation.types';
import Analytics from './Analytics.screen';
import BottomNav from './navs/Bottom.nav';
import theme from '../theme';
import Header from './navs/Header.nav';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const BottomTabs = createBottomTabNavigator<NavList>();
const BottomNavigator: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={theme.lightGray} />
      <BottomTabs.Navigator
        initialRouteName="Task"
        tabBar={props => <BottomNav {...props} />}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.lightGray,
            position: 'absolute',
          },
          header: props => {
            return <Header {...props} />;
          },
        }}>
        <BottomTabs.Screen name={'Task'} component={Home} />
        <BottomTabs.Screen name="Add" component={Add} />
        <BottomTabs.Screen name="Analytics" component={Analytics} />
      </BottomTabs.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: theme.lightGray, flex: 1},
});

export default BottomNavigator;
