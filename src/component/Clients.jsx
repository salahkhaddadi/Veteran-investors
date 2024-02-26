import first from './../assets/clients/01client.jpeg';
import second from './../assets/clients/02client.jpeg';
import Connect from './Connect';

const clientTestimonials = [
  {
    testimonial:
      'i told Cameron i had an interest in the stock market and crypto while we were working together. He offered to teach me all that he knew and in the process i made over $50 USD, and continue to make profits. He is a genuine, smart guy who loves to help people. Would highly recommend his services to anyone interested on investing on the stock market.',
    name: 'Bhima',
    // jobTitle: 'Software Engineer',
    image: first,
  },
  {
    testimonial:
      "Cam has a bank of knowledge. He has helped me to better understand the market. He has become my mentor and i'm loving every minute of it. He has a lot of time for me whenever i need him! Couldn't recommend him more.",
    name: 'RJ Smit',
    // jobTitle: 'Marketing Specialist',
    image: second,
  },
];

const Clients = () => {
  return (
    <div>
      <article
        className="max-w-screen-xl px-7 py-20 mx-auto"
        data-aos={`fade-up`}
      >
        <div className="grid md:grid-cols-[0.5fr,1fr] gap-10 items-center  md:p-20 p-3 relative ">
          <div className="w-[84%] h-[110%] bg-blue-950 absolute z-0 rounded-2xl md:opacity-100 opacity-0"></div>

          <Connect />
          <div className="grid grid-cols-1 gap-10 z-10">
            {clientTestimonials.map((client) => {
              return (
                <div
                  key={client.name}
                  className="grid md:grid-cols-[0.5fr,1fr] items-center gap-5 bg-white p-5 rounded-xl shadow-xl"
                >
                  <div>
                    <img
                      className="w-full md:rounded-[50%] rounded-xl shadow-xl"
                      src={client.image}
                    ></img>
                  </div>

                  <div className="">
                    <blockquote className="text-lg mb-5 leading-8">
                      {client.testimonial}
                    </blockquote>
                    <div className="">
                      <h1 className="text-2xl font-semibold text-orange-500">
                        {client.name}
                      </h1>
                      {/* <h3 className="">{client.jobTitle}</h3> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
};
export default Clients;
