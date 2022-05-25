import { useContext } from 'react';

import { languageConfig } from '../configs';
import { LanguageContext } from './contexts/LanguageStore';
import { DispatchSetState, Language } from '../shared';

export const LanguageSelector: React.FC = () => {
  const context = useContext(LanguageContext);

  return (
    <div>
      <h3>Select a language:</h3>
      {languageConfig.map((item) => (
        <i
          key={item.flag}
          className={`flag ${item.flag}`}
          onClick={_changeLanguage(
            item.language,
            context ? context.setLanguage : () => {}
          )}
        />
      ))}
    </div>
  );
};

const _changeLanguage =
  (language: Language, setLanguage: DispatchSetState<Language>) => () => {
    setLanguage(language);
  };
