import hkex from './../assets/companies/hkex.png';
import jpx from './../assets/companies/jpx.png';
import nasdaq from './../assets/companies/nasdaq.png';
import nyse from './../assets/companies/nyse.png';
import sgx from './../assets/companies/sgx.png';
import twse from './../assets/companies/twse.png';

const companies = [hkex, jpx, nasdaq, nyse, sgx, twse];

const Companies = () => {
  return (
    <div className="md:col-span-2 grid md:grid-cols-6 grid-cols-2 gap-5  justify-items-center items-center text-center md:mx-0 mx-auto grayscale">
      {companies.map((img) => {
        return <img key={img} src={img}></img>;
      })}
    </div>
  );
};
export default Companies;
