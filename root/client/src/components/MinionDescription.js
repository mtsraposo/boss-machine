import React from 'react';

const MinionDescription = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Salary: {props.salary}</p>
      <p>Weaknesses: {props.weaknesses}</p>
    </div>
  )
}

export default MinionDescription;
