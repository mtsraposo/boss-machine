import React from 'react';
import { connect } from 'react-redux';

import { deleteWorkThunk } from '../store/work';
import minionButton from "../assets/x_button.svg";
import minionButtonTrans from "../assets/x_button-trans.svg";

const SingleWorkRowDescription = ({ work, idx, toggleEdit, deleteWork }) => {
  return (
    <tr>
      <td className="work-x">
        <img className="button" onClick={() => deleteWork(work)} src={idx % 2 === 0 ? minionButtonTrans : minionButton} alt=""/>
      </td>
      <td className="work-title">{work.title}</td>
      <td className="work-desc">{work.description}</td>
      <td className="work-hours">{work.hours}</td>
      <td className="work-save" onClick={toggleEdit}>
        <div className=" button work-save-button">Edit</div>
      </td>
    </tr>
  )
}

const mapDispatch = dispatch => ({
  deleteWork: work => {
    dispatch(deleteWorkThunk(work));
  }
})

export default connect(null, mapDispatch)(SingleWorkRowDescription);
