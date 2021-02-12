import { darkTheme, container } from '../styles';

const Header = () => {
  return (
    <header className={`Header ${darkTheme()}`}>
      <div className={`${container()} h-full flex items-center`}>
        Script Writer App
      </div>
    </header>
  );
};

export default Header;
