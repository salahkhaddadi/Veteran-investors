const Button = ({ children, moreClass, onClick, link, type }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white  rounded-xl px-5 py-3 bg-orange-500 hover:bg-blue-950 transition-all duration-500  ${moreClass} `}
      type={type}
    >
      <a href={link}>{children}</a>
    </button>
  );
};
export default Button;
