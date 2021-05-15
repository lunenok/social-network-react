import {sendMessageAction} from '../redux/dialogs-reducer';
import {Dialogs} from "./dialogs";
import {connect} from 'react-redux';
import {withAuthComponent} from '../hocs/withAuthComponent';
import { compose } from 'redux';
import { AppStateType } from '../redux/store';

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsName:state.dialogsPage.dialogsName,
        messages: state.dialogsPage.messages,
    };
};

export const DialogsContainer = compose(
    connect(mapStateToProps, {sendMessageCreator: sendMessageAction}),
    withAuthComponent
    )(Dialogs) as React.FC;
    