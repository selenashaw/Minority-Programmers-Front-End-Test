import './Class.css';
import CourseSidebar from './CourseSidebar';

const Class = (props) => {
  const { id } = props.match.params;
  const { mod } = props.match.params;
  
  let currclass = props.data.courses.filter(comp => comp.id == id)[0];
  let currmod = currclass.mods.filter(comp => comp.id==mod)[0];

  let prog = currmod.percent*692.66/100;

  return (
    <div className='class-container'>
      <CourseSidebar />
      <div className='week-header'>Week {currmod.week}</div>
      <div className='progress-header'>Progress</div>
      <div className='num-complete'>{currmod.finished}/{currmod.tasks}</div>
      <div className='class-prog-bar'>
        <div className='class-prog-left'></div>
        <div className='class-prog-finished' style={{width:prog}}></div>
      </div>
      <div className='class-percentage'>{currmod.percent}% Complete</div>
      <div className='activities-container'>
        {/* Make the activity box, will basically be the same as the courses */}
        {/* Also check to see fi the 10/10 and stuff is centered */}

      </div>
    </div>
  );
}

export default Class