const links = [
  { name: 'Features', link: '#features' },
  { name: 'About Us', link: '#about' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact Us', link: '#contact' },
];

const Links = () => {
  return (
    <>
      {links.map((item) => {
        return (
          <li key={item.name}>
            <a
              href={item.link}
              className="hover:text-orange-500 transition-all duration-300"
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </>
  );
};
export default Links;
