import React, {Component} from 'react';
import {connect} from 'react-redux';

import SingleWorkRow from './SingleWorkRow';

import {updateWorkThunk, createWorkThunk} from '../store/work';

const Work = (props) => {
    // this.state = {
    //   editingNewWork: false,
    // }

    const toggleEdit = () => {
        // this.setState({
        //   editingNewWork: !this.state.editingNewWork,
        // });
    }

    const saveNewWork = work => {
        props.createWork(work);
        // this.setState({
        //   editingNewWork: false,
        // })
    }

    const defaultWork = {
        title: 'New Work',
        description: '',
        hours: 0,
        minionId: props.selectedMinion.id,
    }
    const workRows = props.work.map((work, idx) => {
        return (
            <SingleWorkRow updateWork={props.updateWork} work={work} key={work.id} idx={idx}/>
        )
    });

    const nextIdx = workRows.length + 1;
    const editingRow = props.editingNewWork
        ? <SingleWorkRow saveNewWork={saveNewWork} newWork={true} editing={true} work={defaultWork}
                         idx={nextIdx}/>
        : null;
    const buttonText = props.editingNewWork ? 'Cancel' : 'Add Work';

    return (
        <div id="work-container">
            <div id="work-label" className="label meetings-label">Work</div>
            <table className="work-table">
                <thead>
                <tr>
                    <th className="work-x"/>
                    <th className="work-title">Title</th>
                    <th className="work-desc">Descr.</th>
                    <th className="work-hours">Hrs.</th>
                    <th className="work-save"/>
                </tr>
                </thead>
                <tbody>
                {workRows}
                {editingRow}
                <tr>
                    <td/>
                    <td/>
                    <td>
                        <div onClick={toggleEdit} className="button add-work-button">
                            {buttonText}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

const mapState = ({work, selectedMinion}) => (
    {work, selectedMinion}
);

const mapDispatch = dispatch => ({
    updateWork: work => {
        dispatch(updateWorkThunk(work));
    },
    createWork: work => {
        dispatch(createWorkThunk(work));
    }
})

export default connect(mapState, mapDispatch)(Work);
