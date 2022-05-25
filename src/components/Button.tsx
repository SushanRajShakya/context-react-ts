import { useContext } from 'react';

import { Submit } from '../shared';
import { LanguageContext } from './contexts';
import { ColorContext } from './contexts/Color';

export const Button: React.FC = () => {
  const language = useContext(LanguageContext);
  const color = useContext(ColorContext);

  console.log(color);

  return <button className={`ui button ${color}`}>{Submit[language]}</button>;
};
