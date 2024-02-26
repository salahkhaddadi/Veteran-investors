import Button from './Button';

const Form = () => {
  return (
    <form action="https://formspree.io/f/xknlojak" method="POST" a>
      <div className="grid grid-cols-1 gap-7 mb-7">
        <input
          name="Full name"
          type="text"
          className="p-4 text-xl rounded-xl"
          placeholder="Full name"
          required
        />
        <input
          name="Email address"
          type="email"
          className="p-4 text-xl rounded-xl"
          placeholder="Your email address"
          required
        />
        <input
          name="Contact number"
          type="number"
          className="p-4 text-xl rounded-xl"
          placeholder="Your contact number"
          required
        />
        <p className="text-base">
          This form is not to be used for advertising purposes. Please provide
          your name, email & contact number, & one of our team will contact you
          as soon as possible.
        </p>
      </div>

      <Button
        moreClass={
          'hover:text-orange-500 hover:ring-4 hover:ring-orange-500 -rotate-12 hover:rotate-0 ring-inset font-semibold text-2xl '
        }
        type={'submit'}
      >
        Submit
      </Button>
    </form>
  );
};
export default Form;
