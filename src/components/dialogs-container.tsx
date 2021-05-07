import {sendMessageCreator} from '../redux/dialogs-reducer';
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        onMessageSendButtonClick: (message: string) => {
            dispatch(sendMessageCreator(message))
        }
    };
};

export const DialogsContainer = compose(
    withAuthComponent, 
    connect(mapStateToProps, mapDispatchToProps)
    )(Dialogs);
    