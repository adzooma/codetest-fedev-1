import React from 'react';
import { Link } from 'react-router-dom';
import './TaskStatus.css';

const TaskStatus = (props) => {

  const task = props.tasks[props.active-1];
  const backButton = ((props.active > 1) ?
      <Link to={task.links[0]} className="taskstatus__buttonback button">&lt; Back</Link>
  : '');
  const forwardButton = ((props.active < props.tasks.length) ?
    <React.Fragment>
      <Link to={task.links[1]} className="taskstatus__buttonforward button">Continue &gt;</Link>
      <button to={task.link} className="taskstatus__buttondisabled" disabled>Continue &gt;</button>
    </React.Fragment>
  : '');
  const taskComplete = (props.completeCriteria || (() => {}))
  const showCheckbox = (props.completeCriteria) ? true : false;

  return (
    <div className={`taskstatus ${(taskComplete() === true) ? 'is-completed' : ''}`}>
      <span className="taskstatus__pre">Task {props.active}/{props.tasks.length}</span>
      <span className="taskstatus__taskname">
        {showCheckbox ?
          <React.Fragment>
            <span className="taskstatus__checkboxoff material-icons">check_box_outline_blank</span>
            <span className="taskstatus__checkboxon material-icons">check_box</span>
          </React.Fragment>
        : <React.Fragment></React.Fragment>}
        <h2 className="taskstatus__tasknametext">{task.title}</h2>
      </span>
      <span className="taskstatus__taskdesc">{task.description}</span>
      {backButton}
      {forwardButton}
    </div>
  );

};

export default TaskStatus;
