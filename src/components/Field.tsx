import { useContext } from 'react';

import { Language, Name } from '../shared';
import { LanguageContext } from './contexts';

export const Field: React.FC = () => {
  const context = useContext(LanguageContext);
  const language = context ? context.language : Language.ENGLISH;

  return (
    <div className="ui field">
      <label>{Name[language]}</label>
      <input />
    </div>
  );
};
