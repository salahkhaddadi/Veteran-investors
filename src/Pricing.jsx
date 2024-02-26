import { useState } from 'react';
import PriceCard from './component/PriceCard';
import Button from './component/Button';
import Toogle from './component/Toogle';
import SectionTitle from './component/SectionTitle';

const premium = [
  { name: 'Private Chatroom.', valid: true },
  {
    name: 'Daily Alerts on Trades with Pre/Post Gains.',
    valid: true,
  },
  {
    name: 'Daily Voice/Video calls with Cameron.',
    valid: false,
  },
  { name: 'Updates on Reliable stocks to trade.', valid: false },
  { name: 'Exclusive Alerts.', valid: false },
  { name: 'Access to 70%-80% Hit rate techniques.', valid: false },
  { name: 'Full private trading guides.', valid: false },
  {
    name: 'Full Exclusive trading Education.',
    valid: false,
  },
  { name: 'Private weekly meetings & trade check-ins.', valid: false },
  { name: 'Weekly 1 on 1 Mentoring.', valid: false },
];

const vip = [
  { name: 'Private Chatroom.', valid: true },
  {
    name: 'Daily Alerts on Trades with Pre/Post Gains.',
    valid: true,
  },
  {
    name: 'Daily Voice/Video calls with Cameron.',
    valid: true,
  },
  { name: 'Updates on Reliable stocks to trade.', valid: true },
  { name: 'Exclusive Alerts.', valid: true },
  { name: 'Access to 70%-80% Hit rate techniques.', valid: true },
  { name: 'Full private trading guides.', valid: true },
  {
    name: 'Full Exclusive trading Education.',
    valid: true,
  },
  { name: 'Private weekly meetings & trade check-ins.', valid: true },
  { name: 'Weekly 1 on 1 Mentoring.', valid: true },
];

const Pricing = () => {
  const [period, setPeriod] = useState('Month');

  return (
    <div id="pricing" className="max-w-screen-xl mx-auto py-20 px-7">
      <div className="md:flex justify-around items-center md:mb-14 mb-10 text-center">
        <SectionTitle tailClass={'md:mb-0 mb-5'}>
          Simple, transparent pricing
        </SectionTitle>

        <div className="border-2 border-blue-950 inline-block rounded-lg h-full p-1 flex">
          <Toogle
            tailClass={`${period === 'Week' && 'bg-blue-950 text-white'}`}
            onClick={() => setPeriod('Week')}
          >
            Week
          </Toogle>
          <Toogle
            tailClass={`${period === 'Month' && 'bg-blue-950 text-white'}`}
            onClick={() => setPeriod('Month')}
          >
            Month
          </Toogle>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-9 justify-center">
        <PriceCard
          animation={'fade-right'}
          data={premium}
          type={'Premium'}
          price={period === 'Week' ? '25AUD/Week' : '100AUD/Month'}
          link={
            period === 'Week'
              ? 'https://whop.com/checkout/plan_eYgIXaZePgDUR/'
              : 'https://whop.com/checkout/plan_fmbYi96654Rpr/'
          }
          currency={period === 'Week' ? '13GBP or 17USD' : '52GBP or 66USD'}
        />
        <PriceCard
          animation={'fade-up'}
          data={vip}
          type={'VIP'}
          price={period === 'Week' ? '50AUD/Week' : '180AUD/Month'}
          period={period}
          link={
            period === 'Week'
              ? 'https://whop.com/checkout/plan_wsISSI6AQvJEz/'
              : 'https://whop.com/checkout/plan_ExU4OJbTZGin3'
          }
          currency={period === 'Week' ? '26GBP or 33USD' : '93GBP or 120USD'}
          highlight={true}
          discount={'-20%'}
        />
      </div>
    </div>
  );
};
export default Pricing;
