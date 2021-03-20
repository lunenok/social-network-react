import React from 'react';

export class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this._activateEditMode = this._activateEditMode.bind(this);
        this._deactivateEditMode = this._deactivateEditMode.bind(this);
    }

    state = {
        editMode: false,
    };

    _activateEditMode() {
        this.setState({
            editMode: true,
        });
    };

    _deactivateEditMode() {
        this.setState({
            editMode: false,
        });
    };

    render() {
        return (
            <div className='profile__status-container'>
                {!this.state.editMode && <div onDoubleClick={this._activateEditMode} className='profile__status-text'>Кекеке</div>}
                {this.state.editMode && <input onBlur={this._deactivateEditMode} autoFocus className='profile__status-input' type="text"></input>}
            </div>
        )
    };
};