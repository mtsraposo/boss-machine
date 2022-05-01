import React, {Component, useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import Meeting from './Meeting';

import {createMeetingThunk, updateTimeout} from '../store/meetings';


const AllMeetings = (props) => {

    useEffect(() => {
        const addMeeting = () => {
            props.createMeeting();
            const timeoutId = window.setTimeout(addMeeting, Number(props.timeoutTime));
            props.updateTimeout(timeoutId);
        }

        addMeeting();

        // Unmount
        return () => {
            window.clearTimeout(props.timeoutId);
        }

    }, []);

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

const mapState = (storeReducer) => ({
    meetings: storeReducer.meetings.meetings,
    timeoutId: storeReducer.meetings.timeoutId,
    timeoutTime: storeReducer.meetings.timeoutTime
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

