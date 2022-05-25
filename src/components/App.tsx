import { Color } from '../shared';
import { UserCreate } from './UserCreate';
import { LanguageSelector } from './LanguageSelector';
import { LanguageStore, ColorContext } from './contexts';

export const App: React.FC = () => {
  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value={Color.PRIMARY}>
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
};
