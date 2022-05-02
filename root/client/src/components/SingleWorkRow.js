import React from 'react';

import SingleWorkRowDescription from './SingleWorkRowDescription';
import SingleWorkRowEdit from './SingleWorkRowEdit';

const SingleWorkRow = (props) => {

    let editing = props.editing;
    // this.state = {
    //   editing: editing,
    //   work: props.work,
    // }

  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     work: newProps.work
  //   });
  // }

  const handleChange = e => {
    // this.setState({
    //   work: Object.assign(this.state.work, {
    //     [e.target.name]: e.target.value,
    //   }),
    // });
  }

  const toggleEdit = e => {
    if (props.editing) {
      if (props.newWork) {
        props.saveNewWork(props.work);
      } else {
        props.updateWork(props.work);
      }
    }
    
    // this.setState({
    //   editing: !this.state.editing
    // });
  }

    return (
        props.editing
        ? <SingleWorkRowEdit work={props.work} idx={props.idx} handleChange={handleChange} toggleEdit={toggleEdit}/>
        : <SingleWorkRowDescription work={props.work} idx={props.idx} toggleEdit={toggleEdit}/>
    );

}

export default SingleWorkRow;
