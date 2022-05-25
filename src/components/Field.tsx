import { useContext } from 'react';

import { Name } from '../shared';
import { LanguageContext } from './contexts';

export const Field: React.FC = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="ui field">
      <label>{Name[language]}</label>
      <input />
    </div>
  );
};
