import React from 'react';

const SingleWorkRowEdit = (props) => {
  return (
    <tr>
      <td />
      <td><input name="title" className="work-title-edit" onChange={props.handleChange} value={props.work.title}/></td>
      <td><input name="description" className="work-desc-edit" onChange={props.handleChange} value={props.work.description}/></td>
      <td><input name="hours" className="work-hours-edit" onChange={props.handleChange} value={props.work.hours}/></td>
      <td className="work-save" onClick={props.toggleEdit}><div className=" button work-save-button">Save</div></td>
    </tr>
  );
}

export default SingleWorkRowEdit;
