import {createContext} from 'react';

interface timeContextInterface {
  sub: (func: () => void) => {release: () => void};
}

const TimeContext = createContext<timeContextInterface>({
  sub: () => ({release: () => {}}),
});

export default TimeContext;
