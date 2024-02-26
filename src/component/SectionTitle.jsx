const SectionTitle = ({ children, tailClass }) => {
  return (
    <h1 className={`md:text-4xl text-3xl mb-10 font-semibold ${tailClass}`}>
      {children}
    </h1>
  );
};
export default SectionTitle;
