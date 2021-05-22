import './Course.css';


const Course = (props) => {
  // get the width of the progress bar
  const bar_width=props.percent * 312.5 / 100;
  // get the position for the next course
  const pos = props.id * 420;
  return (
    <div className='course' style={{left:pos}}>
      <button className='course-earn-btn'><div className='course-earn-btn-txt'>Earn $30</div></button>
      <p className='course-header'>{props.title}</p>
      <p className='course-txt'>{props.desc}</p>
      <button className='course-learn-btn'><p className='course-learn-btn-txt'>Learn</p></button>
      <p className='course-modules-txt'>{props.progress}/{props.modules} Modules</p>
      <div className='course-bar'>
        <div className='course-bar-left'></div>
        <div className='course-bar-progress' style={{width:bar_width}}></div>
      </div>
      <p className='course-percent-txt'>{props.percent}% Completed</p>
    </div>
  );
}

export default Course