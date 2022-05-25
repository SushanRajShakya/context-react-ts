import React from 'react';

export type DispatchSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type Nullable<T> = T | null;

export enum Color {
  PRIMARY = 'primary',
  SECONDARY = 'negative',
}
