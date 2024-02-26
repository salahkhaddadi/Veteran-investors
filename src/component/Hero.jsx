import Button from './Button';
import Typed from 'react-typed';
import JoinDiscord from './JoinDiscord';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidthThreshold = 768;
      setIsMobile(window.innerWidth < mobileWidthThreshold);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="max-w-screen-xl mx-auto text-center py-20 px-7 flex flex-col gap-[1.2rem] "
    >
      <h2 className="text-2xl font-medium">
        Welcome to <span className="text-orange-500 "> Veteran Investors</span>
      </h2>

      {!isMobile ? (
        <Typed
          className="md:text-8xl font-bold mb-2 leading-[5rem] text-5xl"
          strings={[
            'Trade with strategy',
            'Invest with precision',
            'Master the markets',
            // 'Make the outcome<br>Income',
          ]}
          typeSpeed={110}
          backSpeed={40}
          loop
        />
      ) : (
        <h1 className="md:text-8xl font-bold mb-2 leading-[5rem] text-5xl">
          Make the outcome
          <br />
          Income
        </h1>
      )}

      <p className="text-2xl font-medium">
        Join our exclusive community and become a profitable stock trader today!
      </p>
      <div className="md:text-2xl text-lg  font-bold cursor-pointer flex text-center md:flex-row flex-col items-center md:gap-16 gap-5 justify-center">
        <JoinDiscord position={'center'} hover={'hover:text-blue-950'} />

        <Button link={'#pricing'}>Get Pass</Button>
      </div>
    </div>
  );
};
export default Hero;
