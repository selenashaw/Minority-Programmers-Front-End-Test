import './Startup.css';
import BackArrow from './back_arrow.svg';
import MGLogo from './mangoswap_logo.svg';
import MiniCard from './MiniCard';

const Startup = (props) => {
  let abttxt='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint';
  return (
    <div className='gradient'>
      <div className='startup-header'>
        <div className='startup-header-title'>
          <img src={BackArrow} alt='backarrow' className='startup-header-arrow'/>
          <div className='startup-header-icon'><img src={MGLogo} alt='mangoswap logo' className='startup-header-img'/></div>
          <div className='startup-header-txt'>Mangoswap</div>
        </div>
        <div className='startup-funds'>
          <div className='startup-funds-head'>Funds raised</div>
          <div className='startup-funds-complete'>50% complete</div>
          <div className='startup-funds-raised'>$200,000/$400,000</div>
        </div>
        <div className='startup-bar'>
          <div className='startup-bar-left'></div>
          <div className='startup-bar-progress'></div>
        </div>
        <button className='startup-header-btn'><div className='startup-header-btn-txt'>Fund Startup</div></button>
      </div>
      <div className='left-info-box'>
        <div className='left-heading-founding'>Founded 17th May, 2015</div>
        <div className='startup-line'></div>
        <div className='left-info-subheading'>Website</div>
        <a href='mangoswap.com' className='left-info-website'>mangoswap.com</a>
        <div className='left-info-subheading' style={{top:'175px'}}>Location</div>
        <div className='left-info-txt'>San Francisco, California</div>
        <div className='left-info-subheading' style={{top:'260px'}}>Team Size</div>
        <div className='left-info-txt' style={{top:'285px'}}>100-500 people</div>
        <div className='startup-line' style={{top:'350px'}}></div>
        <div className='left-info-heading'>Meet the team</div>
{/* Map over teammates in prop for this one? */}
{/* place the stuff below after */}
        <div className='startup-line'></div>
        {/* <div className='left-info-heading'>Tags</div> */}
      </div>
      <div className='startup-info-box'>
        <div className='left-info-heading' style={{top:'20px'}}>About startup</div>
        <div className='startup-info-txt'>{abttxt}</div>
        <div className='startup-line' style={{top:'290px'}}></div>
        <div className='left-info-heading' style={{top:'310px'}}>Vision</div>
        <div className='startup-info-txt' style={{top:'370px'}}>{abttxt}</div>

      </div>
      {/* Fix the height VVV */}
      <div className='startup-info-box' style={{top:'840px', height:'300px'}}>
        <div className='left-info-heading' style={{top:'20px'}}>Related startups</div>
        <MiniCard />
      </div>
    </div>
  );
}

export default Startup