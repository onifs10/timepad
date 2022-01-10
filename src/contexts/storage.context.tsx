import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TASK} from '../types/storage.types';

const storageKey = 'my-app-data';
type AppData = {
  tasks: TASK[];
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};

type AppContextType = {
  tasks: TASK[];
  addTask: (task: TASK) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
};

const defaultValue = {
  tasks: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addTask: async (task: TASK) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeTask: async (task: string) => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC = ({children}) => {
  const [tasks, setTasks] = useState<TASK[]>([]);

  const addTask = async (task: TASK) => {
    try {
      setTasks(value => [...value, task]);
      await setAppData({
        tasks,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const removeTask = async (id: string) => {
    try {
      setTasks(value => value.filter(task => task.id !== id));
      await setAppData({
        tasks,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        let data = await getAppData();
        if (data) {
          setTasks(data.tasks);
        }
      } catch (e) {
        console.error(e);
      }
    };
    init();
  }, []);

  return (
    <AppContext.Provider value={{tasks, addTask, removeTask}}>
      {children}
    </AppContext.Provider>
  );
};
