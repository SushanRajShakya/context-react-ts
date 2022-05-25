import { useState } from 'react';
import { languageConfig } from '../configs';

import { UserCreate } from './UserCreate';
import { LanguageContext } from './contexts';
import { ColorContext } from './contexts/Color';
import { Color, DispatchSetState, Language } from '../shared';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.ENGLISH);

  return (
    <div className="ui container">
      <div>
        <h3>Select a language:</h3>
        {languageConfig.map((item) => (
          <i
            key={item.flag}
            className={`flag ${item.flag}`}
            onClick={_changeLanguage(item.language, setLanguage)}
          />
        ))}
      </div>
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider
          value={
            language === Language.ENGLISH ? Color.PRIMARY : Color.SECONDARY
          }
        >
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

const _changeLanguage =
  (language: Language, setLanguage: DispatchSetState<Language>) => () => {
    setLanguage(language);
  };
