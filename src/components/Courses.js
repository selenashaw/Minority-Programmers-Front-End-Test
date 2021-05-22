import './Courses.css';
import Course from './Course';

const Courses = (props) => {
  let id = 0;

  const mapcourses=(course)=> {
    let component= (<Course title={course.title} desc={course.desc} 
      progress={props.progress} modules={props.modules} percent={props.percent} id={id}/>)
    id = id+1;
    return component;
  }
  return (
    <div className='course-layout' style={{top:props.vpos}}>
      {props.courses.map((card) => mapcourses(card))}

    </div>
  );
}

export default Courses