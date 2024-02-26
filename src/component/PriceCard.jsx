import Button from './Button';

const PriceCard = ({
  data,
  type,
  price,
  link,
  highlight,
  animation,
  discount,
  period,
  currency,
}) => {
  return (
    <div
      className={`justify-self-center p-10 shadow-xl rounded-2xl relative overflow-hidden ${
        highlight && 'bg-blue-950 text-white'
      } `}
      data-aos={`${animation}`}
    >
      {period === 'Month' && (
        <h1 className="text-4xl font-bold absolute -top-0 -right-20 px-20 py-5 bg-orange-500 rotate-45">
          {discount}
        </h1>
      )}

      <h2 className="font-medium text-2xl mb-4">{type}</h2>
      <div className="flex items-end gap-3 mb-6">
        <h1 className="text-orange-500 text-4xl font-bold mb-">{price}</h1>
        <h2 className="text-orange-500 text-xl font-bold mb-">{currency}</h2>
      </div>

      <ul className="mb-5 p-2">
        {data.map((feature) => {
          return (
            <li
              key={feature.name}
              className="flex items-center gap-3 text-lg font-medium mb-2"
            >
              <span
                className={`text-2xl flex items-center ${
                  feature.valid ? 'text-orange-500' : 'text-blue-950'
                }`}
              >
                <ion-icon
                  name={`${
                    feature.valid ? 'checkmark-circle' : 'close-circle'
                  }`}
                ></ion-icon>
              </span>
              <h2>{feature.name}</h2>
            </li>
          );
        })}
      </ul>
      <a href={link} target={`_blank`} className="shadow-lg">
        <Button
          moreClass={`w-full font-bold text-2xl ${
            highlight && 'hover:ring-orange-500 hover:ring-4 hover:ring-inset'
          }`}
        >
          Choose Plan
        </Button>
      </a>
    </div>
  );
};
export default PriceCard;
