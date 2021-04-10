import React from 'react';

export class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this._activateEditMode = this._activateEditMode.bind(this);
        this._deactivateEditMode = this._deactivateEditMode.bind(this);
        this._setLocalStatus = this._setLocalStatus.bind(this);
    }

    statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        };
    };

    _setLocalStatus(evt) {
        this.setState({
            status: evt.currentTarget.value,
        });
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
        this.props.updateProfileStatus(this.state.status);
    };

    render() {
        return (
            <div className='profile__status-container'>
                {!this.state.editMode && <div onDoubleClick={this._activateEditMode} className='profile__status-text'>{this.props.status ? this.props.status : 'No status'}</div>}
                {this.state.editMode && <input ref={this.statusInputRef} onBlur={this._deactivateEditMode} onChange={this._setLocalStatus} autoFocus className='profile__status-input' type="text" value={this.state.status}></input>}
            </div>
        )
    };
};