import data from './assets/data.jpeg';
import service from './assets/services.jpeg';
import strategy from './assets/strategy.jpeg';

const content = [
  {
    title: 'Independent Advice',
    description:
      'Our independent investment advice will give you the confidence to make suitable financial decisions.',
    image: data,
    animation: 'fade-right',
  },
  {
    title: 'Strategy Planning',
    description:
      'Our strategic planning will help you define your vision and develop objectives to take your finances to the next level.',
    image: service,
    animation: 'zoom-in',
  },
  {
    title: 'World-class Services',
    description:
      'We provide world-class services that help give you the confidence you need to make the first steps to a better future.',
    image: strategy,
    animation: 'fade-up',
  },
];

const Service = () => {
  return (
    <section className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto py-20 px-7 grid md:grid-cols-3 gap-10">
        {content.map((item) => {
          return (
            <div
              key={item}
              className="text-center rounded-xl bg-white shadow-xl hover:-translate-y-5 transition-all duration-300"
              data-aos={`${item.animation}`}
            >
              <img className="rounded-t-xl" src={item.image}></img>
              <h1 className="text-2xl font-medium pt-10 pb-5 px-10">
                {item.title}
              </h1>
              <p className="pb-10 px-10 text-lg">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Service;
