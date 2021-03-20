import {updateMessageTextCreator, sendMessageCreator} from './../redux/dialogs-reducer';
import {Dialogs} from "./dialogs";
import {connect} from 'react-redux';
import {withAuthComponent} from './../hoc/withAuthComponent';

const mapStateToProps = (state) => {
    return {
        dialogsName:state.dialogsPage.dialogsName,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        // isAuth: state.authData.isAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageUpdate: (text) => {
            dispatch(updateMessageTextCreator(text))
        },
        onMessageSendButtonClick: () => {
            dispatch(sendMessageCreator())
        }
    };
};

export const DialogsContainer = withAuthComponent(connect(mapStateToProps, mapDispatchToProps)(Dialogs));