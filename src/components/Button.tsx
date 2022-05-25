import { useContext } from 'react';

import { Language, Submit } from '../shared';
import { LanguageContext } from './contexts';
import { ColorContext } from './contexts/Color';

export const Button: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext
    ? languageContext.language
    : Language.ENGLISH;
  const color = useContext(ColorContext);

  return <button className={`ui button ${color}`}>{Submit[language]}</button>;
};
