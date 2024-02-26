import { useState } from 'react';
import Button from './Button';
import Links from './Links';
import logo from './../assets/logo.png';

const NavBar = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="md:flex p-6 max-w-screen-xl mx-auto justify-between items-center md:bg-transparent bg-slate-200">
      {/* <h1 className="text-3xl font-semibold ">Veteran Investor</h1> */}
      <img className="md:w-80 w-60" src={logo}></img>
      <div
        onClick={() => setIsOpen(!open)}
        className="text-5xl text-blue-950 absolute top-8 right-4 md:hidden"
      >
        <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
      </div>

      <ul
        className={`flex flex-col md:flex-row lg:gap-7 gap-4  lg:text-lg md:text-base text-lg items-center font-medium absolute md:static md:bg-transparent bg-slate-200  md:z-auto z-[2] left-0 w-full md:w-auto md:pb-0 pb-10 transition-all duration-500 ease-in ${
          open ? 'top-[80px]' : 'top-[-490px]'
        }`}
      >
        <Links />
        <Button link={'#pricing'}>Our Plans</Button>
      </ul>
    </div>
  );
};

export default NavBar;
