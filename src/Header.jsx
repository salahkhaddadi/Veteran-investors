import NavBar from './component/NavBar';
import Hero from './component/Hero';
import stock from './assets/stock.png';

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.85), rgba(248, 250, 252, 0.92)),url(${stock})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <NavBar />
      <Hero />
    </div>
  );
};
export default Header;
