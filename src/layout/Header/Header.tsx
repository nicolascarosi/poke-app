import { logo } from '@/assets/images';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo PokeApi" className="logo" />
    </header>
  );
};

export { Header };
