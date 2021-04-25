import React, {useState} from 'react';

export const ProfileStatusWithHook = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const _activateEditMode = () => setEditMode(true);
    const _deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    };
    const _onStatusChange = (evt) => {
        setStatus(evt.currentTarget.value);
    };

    return (
        <div className='profile__status-container'>
            {!editMode && <div className='profile__status-text' onDoubleClick={_activateEditMode}>{props.status ? props.status : 'No status'}</div>}
            {editMode && <input autoFocus className='profile__status-input' type="text" onBlur={_deactivateEditMode} onChange={_onStatusChange} value={status}></input>}
        </div>
    )
};