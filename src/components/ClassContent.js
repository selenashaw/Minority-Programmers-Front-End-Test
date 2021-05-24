import './ClassContent.css';
import ClassImg from './vid.PNG';
import Activity from './Activity';
import CourseSidebar from './CourseSidebar';


const ClassContent = (props) => {
  return (
    <div className='class-content-container'>
      <CourseSidebar />
      <img src={ClassImg} alt='class material' className='material-img'></img>

      <div className='activities-container'>
      <Activity />
      </div>
    </div>
  );
}

export default ClassContent