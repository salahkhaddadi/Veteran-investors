import JoinDiscord from './JoinDiscord';

const Connect = () => {
  return (
    <div className="flex flex-col gap-4 md:text-white z-10">
      <h1 className="text-3xl font-semibold">
        Connect with
        <br />
        other members
      </h1>
      <p>
        Join Our Vibrant Community, share ideas, and grow together by becoming
        part of our lively Discord community.
      </p>
      <JoinDiscord hover={'hover:text-white'} />
    </div>
  );
};
export default Connect;
