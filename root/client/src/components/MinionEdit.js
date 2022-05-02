import React from 'react';

const MinionEdit = (props) => {
  return (
    <div className="minion-edit">
      <div className="minion-edit-single-rows">
        <div className="minion-edit-row">
          <div className="minion-edit-label">Name:</div>
          <input name="name" type="text" value={props.name} onChange={props.handleChange}/>
        </div>
        <div className="minion-edit-row">
          <div className="minion-edit-label">Title:</div>
          <input name="title" type="text" value={props.title} onChange={props.handleChange}/>
        </div>
        <div className="minion-edit-row">
          <div className="minion-edit-label">Salary:</div>
          <input name="salary" type="text" value={props.salary}  onChange={props.handleChange}/>
        </div>
      </div>
      <div>
        Weaknesses:
      </div>
      <div>
        <textarea className="minion-input-textarea" name="weaknesses" value={props.weaknesses} onChange={handleChange} />
      </div>
    </div>
  )
}

export default MinionEdit;
