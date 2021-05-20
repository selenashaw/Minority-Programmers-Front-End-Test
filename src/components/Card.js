import './Card.css';
import MSwapLogo from './mangoswap_logo.svg';


const Card = (props) => {
  const width = props.percent * 374 / 100;
  const pos = props.id * 550;
  return (
    <div className='card' style={{left:pos}}>
      <div className='card-container'>
        <div className='card-icon'>
          <img className='card-img' src={MSwapLogo} alt='mangoswap logo'></img>
        </div>
        <p className='card-title'>{props.title}</p>
        <p className='card-text'>{props.text}</p>
        <div className='card-funds'>
          <div className='card-funds-header'>
            <p className='card-funds-raised'>Fund raise</p>
            <p className='card-funds-percent'>{props.percent}% complete</p>
          </div>
          <p className='card-funds-amnt'>${props.raised}/${props.goal}</p>
          <div className='card-funds-bar'>
            {/* figure out how to size the width using the precent props */}
            <div className='card-funds-left'></div>
            <div className='card-funds-progress' style={{width:width}}></div>
          </div>
        </div>
        <button className='card-fund-btn'><div className='card-fund-text'>Fund Startup</div></button>
        <div className='btn-placement'>
          <button className='card-learn-btn'><div className='card-learn-text'>Learn more</div></button>
        </div>
      </div>
    </div>
  );
}

export default Card;