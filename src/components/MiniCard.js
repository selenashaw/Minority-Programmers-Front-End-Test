import './MiniCard.css';
import MSwapLogo from './mangoswap_logo.svg';

const MiniCard = (props) => {
  let pos_h=-300;
  let temp = {
    title:'Mangoswap',
    percent: 50,
    goal:'400,000',
    raised:'200,000'
  };
  let pb_width=temp.percent * 280.5 / 100;
  return (
    <div className='minicard' style={{left:pos_h}}>
      <div className='minicard-container'>
        <div className='minicard-header'>
          <div className='minicard-icon'>
            <img src={MSwapLogo} alt='mangoswap logo' className='minicard-img' />
          </div>
          <div className='minicard-header-txt'>{temp.title}</div>
        </div>
        <div className='minicard-funds-container'>
          <div className='minicard-funds'>
            <div className='minicard-fund-head'>Funds raise</div>
            <div className='minicard-funds-complete'>{temp.percent}% complete</div>
          </div>
          <div className='minicard-fund-amnt'>${temp.raised}/${temp.goal}</div>
          <div className='minicard-bar'>
            <div className='minicard-bar-left'></div>
            <div className='minicard-bar-progress' style={{width:pb_width}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCard