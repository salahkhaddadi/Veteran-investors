import {
  RiChatPrivateFill,
  RiAlarmFill,
  RiBarChartBoxFill,
} from 'react-icons/ri';
import { AiFillAlert, AiOutlineAreaChart } from 'react-icons/ai';
import { PiStudentFill } from 'react-icons/pi';
import Feature from './component/Feature';
import SectionTitle from './component/SectionTitle';

const features = [
  {
    title: 'Private Chatroom',
    description:
      'Engage in real-time discussions with fellow traders and industry experts to exchange insights and strategies.',
    icon: <RiChatPrivateFill />,
    animation: 'fade-right',
  },
  {
    title: 'Daily Alerts',
    description:
      'Stay updated on potential profitable trades with pre/post gains through timely notifications and expert analysis.',
    icon: <RiAlarmFill />,
    animation: 'fade-up',
  },
  {
    title: 'Chart Requests',
    description:
      'Receive personalized chart analysis for your preferred stocks, helping you understand market trends and make informed decisions.',
    icon: <RiBarChartBoxFill />,
    animation: 'fade-up',
  },
  {
    title: 'Exclusive Alerts',
    description:
      'Gain access to exclusive trade alerts and opportunities, providing you with an edge in the market.',
    icon: <AiFillAlert />,
    animation: 'fade-right',
  },
  {
    title: 'Private Indicators',
    description:
      'Utilize our advanced proprietary indicators for comprehensive market analysis, enhanced decision-making, and unparalleled insights.',
    icon: <AiOutlineAreaChart />,
    animation: 'fade-up',
  },
  {
    title: 'Private Guide',
    description:
      'Access a comprehensive trading guide and resources, equipping you with the knowledge and strategies to excel in trading.',
    icon: <PiStudentFill />,
    animation: 'fade-up',
  },
];

const Features = () => {
  return (
    <div id="features" className="max-w-screen-xl mx-auto md:py-20 px-7 py-16 ">
      <SectionTitle tailClass={'text-center'}>
        Unlock Your Trading Success
      </SectionTitle>
      <article className="md:px-7 px-5 grid md:grid-cols-3 gap-10">
        {features.map((item) => {
          return (
            <Feature
              animation={item.animation}
              key={item.title}
              title={item.title}
              desc={item.description}
              icon={item.icon}
            />
          );
        })}
      </article>
    </div>
  );
};
export default Features;
