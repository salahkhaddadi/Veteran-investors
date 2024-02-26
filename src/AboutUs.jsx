import Companies from './component/Companies';
import Faq from './component/Faq';
import SectionTitle from './component/SectionTitle';

const AboutUs = () => {
  return (
    <div id="about" className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto py-20 px-7 grid md:grid-cols-2 gap-10 items-center ">
        <div>
          <h2 className="font-medium bg-blue-950 text-slate-50 px-2 px-1 rounded-lg inline-block mb-1">
            About Us
          </h2>

          <SectionTitle>
            We are <span className="text-orange-500">Veteran Investors</span>
          </SectionTitle>

          <p className="text-xl">
            The ultimate destination for stock trading and crypto enthusiasts.
            Our mission is to equip individuals with the necessary knowledge and
            skills to thrive in the dynamic world of financial markets. As a
            member of our exclusive Discord community, you'll gain access to
            top-notch training programs, personalized mentorship, and invaluable
            resources designed to turn your aspirations of wealth into reality.
          </p>
        </div>
        <Faq />
        <Companies />
      </div>
    </div>
  );
};
export default AboutUs;
