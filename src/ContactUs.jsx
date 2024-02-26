import Form from './component/Form';

const ContactUs = () => {
  return (
    <section id="contact" className=" bg-slate-100">
      <div className="max-w-screen-xl mx-auto p-20 px-7 grid md:grid-cols-2 items-center">
        <div className="p-8" data-aos={`fade-right`}>
          <h1 className="text-2xl font-semibold mb-7">
            One Call Away From Financial Freedom
          </h1>
          <div className="border-b-4 border-orange-500 w-1/3 mb-7"></div>
          <p className="text-lg leading-8 mb-4">
            Give our team a call or just e-mail us & we will contact you to help
            you with whatever your financial goals are. If you have any
            questions or queries, or if your interested in becoming a client
            with us at Veteran Investors, we have the team and the knowledge to
            ensure that you reach your financial potential.
          </p>
          <p className="text-lg leading-8 mb-4">
            Make your money work smarter for you. Complete the contact form
            today and submit your inquiry to our team.
          </p>
        </div>
        <div
          className="bg-blue-950 p-7 rounded-xl shadow-2xl text-white"
          data-aos={`fade-up`}
        >
          <Form />
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
