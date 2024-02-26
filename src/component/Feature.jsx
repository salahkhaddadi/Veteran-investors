const Feature = ({ icon, title, desc, animation }) => {
  return (
    <div className="items-center gap-2" data-aos={`${animation}`}>
      <h1 className="text-2xl text-blue-950 font-medium flex items-center gap-2 mb-2">
        <span className="text-3xl text-orange-500">{icon}</span>
        {title}
      </h1>
      <p className="">{desc}</p>
    </div>
  );
};
export default Feature;
