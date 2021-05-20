import Card from './Card'
import './Cards.css';

const Cards = () => {
  const txt='The mango swap coin is the future for crypto currency, ' +
      'it will allow user share and tansact over defi networks with less fees.'
  return (
    <div className='frame'>
      <div className='cards'>
        {/* Figure out how to make these appear in multiple locations */}
        <Card title="Mangoswap" text={txt} percent='50' raised='200,000' goal='400,000' id={0} />
        <Card title="Mangoswap" text={txt} percent='50' raised='200,000' goal='400,000' id={1}/>
        <Card title="Mangoswap" text={txt} percent='50' raised='200,000' goal='400,000' id={2}/>
      </div>
    </div>
  );
}

export default Cards