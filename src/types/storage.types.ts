export enum CATEGORY {
  WORK = 'work',
  WORKOUT = 'workout',
  OTHERS = 'others',
}

export interface TASK {
  id: string;
  name: string;
  time: string;
  catgeory: CATEGORY;
}
