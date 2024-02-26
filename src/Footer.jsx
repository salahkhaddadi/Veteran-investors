import Links from './component/Links';
import SectionTitle from './component/SectionTitle';
import { FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-blue-950">
      <div className="py-20 px-7 max-w-screen-xl mx-auto text-white grid md:grid-cols-2 items-center md:gap-5 gap-7">
        <div className="text-center md:row-span-2">
          <SectionTitle tailClass={'mb-5'}>Veteran Investors</SectionTitle>
          <p>
            The ultimate destination for stock trading and crypto enthusiasts.
          </p>
        </div>

        <div className="flex gap-7 text-3xl md:justify-self-end justify-center items-center ">
          <a href="https://tiktok.com/@camerontrades" target={`_blank`}>
            <FaTiktok />
          </a>
          <a href="https://instagram.com/veteraninvestors" target={`_blank`}>
            <FaInstagram />
          </a>
          <a href="https://twitter.com/_officialVI_" target={`_blank`}>
            <FaTwitter />
          </a>

          <a href="mailto:veteraninvestors@hotmail.com" target={`_blank`}>
            <HiOutlineMail />
          </a>
        </div>

        <div className="md:flex md:justify-end gap-10 list-none md:text-base text-center">
          <Links />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
