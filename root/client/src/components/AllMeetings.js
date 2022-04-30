import React, {Component, useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import Meeting from './Meeting';

import {
    createMeetingThunk,
    createMeeting,
    cancelMeetings,
    setMeetings,
    selectMeetings,
    selectMeetingsTimeout,
    selectMeetingsTimeoutId, updateTimeout
} from '../store/meetings';


const AllMeetings = (props) => {

    console.log('Mounted AllMeetings');
    console.log(props);

    useEffect(() => {
        const addMeeting = () => {
            props.createMeeting();

            const timeoutId = window.setTimeout(addMeeting, Number(props.timeoutTime));

            props.updateTimeout(timeoutId);

            return timeoutId;
        }

        const timeoutId = addMeeting();

        // Unmount
        return () => {
            window.clearTimeout(timeoutId);
        }

    });

    const allMeetings = props.meetings.map(meeting => {
        return <Meeting key={meeting.date} day={meeting.day} time={meeting.time} note={meeting.note}/>
    });

    return (
        <div id="meetings-landing">
            <div className="label meetings-label">
                Meetings
            </div>
            <div id="meetings-table">
                <table>
                    <thead>
                    <tr>
                        <th id="th-time">Time</th>
                        <th id="th-location">Date</th>
                        <th id="th-note">Note</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allMeetings}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mapState = (state) => ({
    meetings: state.meetings.meetings,
    timeoutTime: state.timeoutTime
});

const mapDispatch = dispatch => ({
    createMeeting: () => {
        dispatch(createMeetingThunk());
    },
    updateTimeout: (timeout) => {
        dispatch(updateTimeout(timeout));
    }
});

export default connect(mapState, mapDispatch)(AllMeetings);

