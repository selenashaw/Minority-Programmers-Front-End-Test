import './MyCourses.css';
import Module from './Module';
import ShotChar from './shot.svg';
import CircleBorder from './circle.svg';
import CloseSidebar from './close-sidebar.svg';

const MyCourses = () => {
  return(
    <div className='my-courses'>
      <div className='my-courses-sidebar'>
        <img src={CloseSidebar} alt='close sidebar' className='close-sb-btn'></img>
        <div className='my-courses-sb-courses'>Courses</div>
        <div className='sb-current-course'>Intro to BlockChain</div>
        <div className='sb-week-header'>Week 1</div>
        <div className='circle-comp'><div className='checkmark'></div></div>
        <div className='sb-course-name'>Class</div>
        <div className='circle-comp' style={{top:'300px', backgroundColor:'#FFFFFF'}}><div className='checkmark' style={{borderBottom:'3.5px solid #676565', borderRight:'3.5px solid #676565'}}></div></div>
        <div className='sb-course-name' style={{top:'305px'}}>Class</div>
      </div>

      <div className='my-courses-icon-container'>
        <img src={CircleBorder} alt='border' className='circle-border'></img>
        <img src={ShotChar} alt='character' className='char-icon'></img>
      </div>
      <div className='welcome-txt'>Welcome back, Shot</div>
      <div className='total-progress-txt'>75% Completed</div>
      <button className='resume-btn'><div className='resume-txt'>Resume</div></button>

      <div className='my-courses-container'>
        <div className='my-courses-header'>Modules</div>
        <div className='active-tab'></div>
        <div className='my-courses-header' style={{left:'300px', fontWeight:'500'}}>Calendar</div>
        <div className='my-courses-header' style={{left:'550px', fontWeight:'500'}}>Messages</div>
        {/* for each module here */}
        <Module id={1} title='Week 1 - Fundamentals of Cryptocurrency' percent={100}/>
        <Module id={2} title='Week 1 - Fundamentals of Cryptocurrency' percent={100}/>
        <Module id={3} title='Week 1 - Fundamentals of Cryptocurrency' percent={75}/>
      </div>
    </div>
  );
}

export default MyCourses