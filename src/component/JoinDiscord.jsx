import { AiFillRightCircle } from 'react-icons/ai';

const JoinDiscord = ({ position, hover }) => {
  return (
    <a
      className={`text-xl font-semibold text-orange-500 flex justify-${position} items-center gap-3 ${hover} transition-all duration-300 `}
      href="https://discord.gg/nWc27wEW"
      target={`_blank`}
    >
      <h1>Join our discord</h1>
      <span>
        <AiFillRightCircle />
      </span>
    </a>
  );
};
export default JoinDiscord;
