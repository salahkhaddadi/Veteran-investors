const Accordion = ({ title, description, id, curOpen, setIsCurOpen }) => {
  const isOpen = curOpen === id;
  const handleOpen = () => {
    setIsCurOpen(isOpen ? null : id);
  };

  return (
    <div
      className={`w-full px-4 bg-white rounded-lg ${
        isOpen && 'border-t-8 border-orange-500 rounded-lg'
      }`}
    >
      <div
        onClick={handleOpen}
        className={`grid grid-cols-[auto,1fr,auto] md:gap-8 gap-5 items-center justify-between cursor-pointer p-4 ${
          isOpen && 'text-orange-500'
        }`}
      >
        <h1 className="font-semibold text-2xl opacity-70">{id}</h1>
        <h1 className="md:font-semibold md:text-2xl font-medium text-xl">
          {title}
        </h1>
        <span className="font-semibold text-4xl">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="p-4 text-xl">{description}</p>}
    </div>
  );
};

export default Accordion;
