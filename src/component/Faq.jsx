import { useState } from 'react';
import Accordion from './Accordion';
import SectionTitle from './SectionTitle';

const accordionData = [
  {
    id: '1',
    title: 'Bringing you independant advice?',
    description:
      'We are entirely independent, meaning that we can provide you with accurate & impartial financial advice on investments from all of the global markets. All recommendations are made only after thorough analysis and research of the entire market place.',
  },
  {
    id: '2',
    title: 'What works for you?',
    description:
      'Whether you are seeking capital growth, regular income or a combination of both, we only select products that will meet your investment needs and goals. A wide range of options are available, along with bespoke plans and strategies that will ensure the optimum return on investment on any product that you choose.',
  },
  {
    id: '3',
    title: 'Regular reviews?',
    description:
      'We plan regular reviews, to account for any changes in your personal circumstances, thus insuring your investments stay on the right path. We value our clients and want the best results, as this allows our company to grow and build on our rich reputation and track record.',
  },

  {
    id: '4',
    title: 'Financial freedom?',
    description:
      'If you are looking for a way to make your finance or wealth grow and work more efficiently for you, the world of investments can appear daunting, with a bewildering range of options to choose from. Our team at Veteran Investors, are here to help you every step of the way and give our impartial and independent advice, to ensure the optimum returns for your future.',
  },
];

const Faq = () => {
  const [curOpen, setIsCurOpen] = useState(null);

  return (
    <div className="">
      <ul className="w-full  ">
        {accordionData.map((item) => (
          <li
            key={item.id}
            className="mb-4 shadow-lg rounded-lg"
            data-aos={`fade-up`}
          >
            <Accordion
              title={item.title}
              description={item.description}
              id={item.id}
              curOpen={curOpen}
              setIsCurOpen={setIsCurOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Faq;
