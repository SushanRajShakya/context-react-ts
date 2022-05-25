import React, { PropsWithChildren, useState } from 'react';

import { Language, Nullable } from '../../shared';

export const LanguageContext = React.createContext<
  Nullable<{
    language: Language;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  }>
>(null);

export const LanguageStore: React.FC<PropsWithChildren<{}>> = ({
  children,
}: PropsWithChildren<{}>) => {
  const [language, setLanguage] = useState(Language.ENGLISH);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
