import React, {useState, useEffect} from 'react';

type PropsType = {
    status: string,
    updateProfileStatus: (status: string) => void
}

export const ProfileStatus: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const _activateEditMode = () => setEditMode(true);
    const _deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    };
    const _onStatusChange = (evt: any) => {
        setStatus(evt.currentTarget.value);
    };

    return (
        <div className='profile__status-container'>
            {!editMode && <div className='profile__status-text' onDoubleClick={_activateEditMode}>{props.status ? props.status : 'No status'}</div>}
            {editMode && <input autoFocus className='profile__status-input' type="text" onBlur={_deactivateEditMode} onChange={_onStatusChange} value={status}></input>}
        </div>
    )
};