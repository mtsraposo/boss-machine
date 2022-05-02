import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';

import {updateMinionThunk, createMinionThunk} from '../store/minions';

import Work from './Work';
import MinionDescription from './MinionDescription';
import MinionEdit from './MinionEdit';

import arrow from "../assets/arrow.svg";
import {singleMinionEnterThunk} from "../store/appState";
import {setSelectedMinion} from "../store/selectedMinion";

const Minion = (props) => {

    let { id } = useParams();

    useEffect(() => {
        if (!props.newMinion) {
            props.singleMinionEnter(id);
        }
    }, []);

    useEffect(()=>{
        props.setSelectedMinion(props.minion);
    }, [props.minion]);

    const handleChange = e => {
        // this.setState({
        //     minion: Object.assign(this.state.minion, {
        //         [e.target.name]: e.target.value,
        //     }),
        // });
    }

    const toggleEdit = (e) => {
        if (props.editing) {
            if (props.newMinion) {
                props.createMinion(props.minion);
            } else {
                props.updateMinion(props.minion);
            }
        }

        // this.setState({
        //     editing: !this.state.editing
        // });
    }

    const newMinion = props.newMinion ? `New Minion` : `Minion Id #${props.minion.id}`;
    const description = props.editing
        ? <MinionEdit handleChange={handleChange} {...props.minion} />
        : <MinionDescription {...props.minion}/>;
    const buttonText = props.editing ? 'Save' : 'Edit';

    return (
        <div>
            <div id="single-minion-landing">
                <div className="minion-details">
                    <div className="label meetings-label">
                        {newMinion}
                    </div>
                    <div className="minion-description">
                        {description}
                    </div>
                    <div className="button minion-save-button" onClick={toggleEdit}>
                        {buttonText}
                    </div>
                </div>
                <div className="work-details">
                    <Work/>
                </div>
            </div>
            <div className="button back-button">
                <Link to="/minions">
                    <img className="button" src={arrow} alt=""/>
                </Link>
            </div>
        </div>
    );
}

const mapState = (storeReducer) => ({
    minion: storeReducer.selectedMinion,
    newMinion: storeReducer.app.editingNewMinion,
});

const mapDispatch = dispatch => ({
    updateMinion: minion => {
        dispatch(updateMinionThunk(minion));
    },
    createMinion: minion => {
        dispatch(createMinionThunk(minion));
    },
    singleMinionEnter: (id) => {
        dispatch(singleMinionEnterThunk(id));
    },
    setSelectedMinion: (minion) => {
        dispatch(setSelectedMinion(minion));
    }
});

export default connect(mapState, mapDispatch)(Minion);
